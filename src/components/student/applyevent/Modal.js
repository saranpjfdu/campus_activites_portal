import React from 'react';
import './Modal.css'; // Import CSS for modal styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <button className="modal-close" onClick={onClose}>×</button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
