import { IModalProps } from 'types/types';
import ModalCard from './ModalCard';

const Modal: React.FC<IModalProps> = function Modal(props) {
  const { setIsModalOpen, id } = props;
  return (
    <div className="modal">
      <ModalCard id={id} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Modal;
