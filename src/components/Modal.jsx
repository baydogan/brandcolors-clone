import { GrFormClose } from "react-icons/gr";


const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-close">
        <GrFormClose style={{width:'24px', height:'24px'}} onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
