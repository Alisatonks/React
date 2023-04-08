import { IModalProps } from 'types/types';
import ModalCard from './ModalCard';

const Modal: React.FC<IModalProps> = function Modal(props) {
  const { isModalOpen, setIsModalOpen } = props;
  console.log(isModalOpen, setIsModalOpen);
  //   function onModal() {
  //     setIsModalOpen(false);
  //   }
  return (
    <div className="modal">
      <ModalCard id={1} />
    </div>
  );
};

export default Modal;
