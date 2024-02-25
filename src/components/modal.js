// src/Modal.js
import React from 'react';
import './modal.css';
const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={closeModal} className="modal-close-button">
          &times; 
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
