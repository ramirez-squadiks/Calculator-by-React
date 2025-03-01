import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;

}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Сообщение</h2>
                <p>{message}</p>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;
