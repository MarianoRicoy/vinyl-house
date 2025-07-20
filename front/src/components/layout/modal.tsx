import React from 'react';
import Portal from './portal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800"
            aria-label="Cerrar modal"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
