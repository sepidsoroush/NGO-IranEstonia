import React from 'react';
import { useGlobalContext } from './context';
import { UilMultiply } from '@iconscout/react-unicons';

const Modal = () => {
  const {isModalOpen , closeModal} = useGlobalContext();

  //JSX for styles
  const showModal = 'visible z-10';
  const modalOverlay = 'fixed top-0 left-0 w-full h-full z-0 invisible grid place-items-center';
  return (
    <div
      className={`${
        isModalOpen ? `${showModal} ${modalOverlay}` : {modalOverlay}}`}
    >
      <div className='w-11/12 h-4/12 grid items-center place-items-center relative'>
        <h3>modal content</h3>
        <button className='absolute top-4 right-4 text-lg cursor-pointer' onClick={closeModal}>
          <UilMultiply></UilMultiply>
        </button>
      </div>
    </div>
  );
};

export default Modal;
