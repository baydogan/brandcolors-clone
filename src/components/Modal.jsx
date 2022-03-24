import { GrFormClose } from "react-icons/gr";
import { useRef, useEffect } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const Modal = ({ closeModal }) => {
  let modalRef = useRef();
  useClickOutside(modalRef, closeModal);

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-close">
        <GrFormClose style={{ width: "24px", height: "24px" }} onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
