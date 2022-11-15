import { createPortal } from 'react-dom';
import { ModalContent, Overlay } from './Modal.styled';

const Modal = ({ largePhoto, tags, onClick }) => {
  return createPortal(
    <Overlay onClick={evt => onClick(evt)}>
      <ModalContent>
        <img src={largePhoto} alt={tags} />
      </ModalContent>
    </Overlay>,
    document.querySelector('.modal')
  );
};

export default Modal;
