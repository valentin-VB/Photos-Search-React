import { ListItem, Image } from './ImageGalleryItem.styled';
import { Component } from 'react';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        this.setState({ isModalOpen: false });
      }
    });
  };

  closeModal = evt => {
    if (evt.currentTarget === evt.target) {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { smallPhoto, tags, largePhoto } = this.props;
    return (
      <>
        <ListItem onClick={this.openModal}>
          <Image src={smallPhoto} alt={tags} />
        </ListItem>
        {this.state.isModalOpen && (
          <Modal
            onClick={this.closeModal}
            largePhoto={largePhoto}
            tags={tags}
          ></Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
