import React from 'react';
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  
    return (
        <div className={show ? "modal display-block" : "modal display-none"}>
            <section className="modal-main">
                {children}
            </section>
        </div>
    );
  };


export default Modal;