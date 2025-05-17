import { useState } from "react";

const Modal = ({ title, btnOpen, btnClass = "btn", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={btnClass} onClick={() => setIsOpen((prev) => !prev)}>
        {btnOpen}
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-content">
          <button
            id="close-btn"
            className="btn"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <h2>
            {title}
          </h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
