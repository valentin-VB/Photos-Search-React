import ImageGalleryItem from 'components/ImageGalleryItem';
import LoadMoreBtn from 'components/Load More Btn';
import Loader from 'components/Loader/Loader';
import { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
import api from '../../Services/api';

class ImageGallery extends Component {
  state = {
    photos: [],
    status: 'idle',
    page: 0,
    errore: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;
    console.log('searchQuery', searchQuery);

    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ photos: [], page: 1 });
      return;
    }

    if (prevState.page !== page || prevProps.searchQuery !== searchQuery) {
      this.setState({ status: 'pending' });
      try {
        const images = await api.fetchPhotos(searchQuery, page);

        if (images.hits.length === 0 && prevState.status !== 'rejected') {
          this.setState({ status: 'rejected' });
          throw new Error('No images');
        }

        this.setState(prevState => ({
          photos: [...prevState.photos, ...images.hits],
          status: 'resolved',
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  handelBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { status, photos } = this.state;

    if (status === 'idle') {
      return (
        <h2 style={{ textAlign: 'center', marginTop: 15 }}>
          Enter a search query in the search field
        </h2>
      );
    }

    if (status === 'rejected') {
      return (
        <h2 style={{ textAlign: 'center', marginTop: 15 }}>
          Sorry, no images were found for this search query
        </h2>
      );
    }

    return (
      <>
        {photos.length > 0 && (
          <GalleryList>
            {photos.map(image => (
              <ImageGalleryItem
                key={image.id}
                tags={image.tags}
                smallPhoto={image.webformatURL}
                largePhoto={image.largeImageURL}
              ></ImageGalleryItem>
            ))}
          </GalleryList>
        )}

        {status === 'pending' && <Loader />}

        {status === 'resolved' && (
          <LoadMoreBtn type="submit" onClick={this.handelBtnClick} />
        )}
      </>
    );
  }
}

export default ImageGallery;
