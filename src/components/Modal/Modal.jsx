import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';

import { ModalOverlay, ModalWindow } from './Modal.styled';

import { ModalForm } from './ModalForm';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ id, closeModal }) => {
  console.log(id);
  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow>
        <ModalForm id={id} closeModal={closeModal} />
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  // src: propTypes.string.isRequired,
  // alt: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};
