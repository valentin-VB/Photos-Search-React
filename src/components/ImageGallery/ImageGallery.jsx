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
    page: 1,
    errore: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { photos, page } = this.state;
    console.log('coci');
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ photos: [] });
    }

    if (
      prevState.page !== page ||
      prevProps.searchQuery !== this.props.searchQuery
    ) {
      this.setState({ status: 'pending' });
      try {
        const images = await api.fetchPhotos(this.props.searchQuery, page);

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

  handelBtnClick = evt => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { status, photos } = this.state;
    console.log('photos', photos);

    if (status === 'idle') {
      return (
        <h2 style={{ textAlign: 'center', marginTop: 15 }}>
          Enter a search query in the search field
        </h2>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <GalleryList>
            {photos.map(image => (
              <ImageGalleryItem
                key={image.id}
                tags={image.tags}
                smallPhoto={image.webformatURL}
              ></ImageGalleryItem>
            ))}
          </GalleryList>
          <LoadMoreBtn type="submit" onClick={this.handelBtnClick} />
        </>
      );
    }

    if (status === 'rejected') {
      return <h1>Гамно собаче</h1>;
    }
  }
}

export default ImageGallery;
