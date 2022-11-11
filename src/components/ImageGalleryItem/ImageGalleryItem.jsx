import { ListItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ smallPhoto, tags }) => {
  return (
    <ListItem>
      <Image src={smallPhoto} alt={tags} />
    </ListItem>
  );
};

export default ImageGalleryItem;
