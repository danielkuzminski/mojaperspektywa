import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if(e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
      //will close selected image
    }
  };

  return (
    <div className='backdrop' onClick={handleClick}>
      <img src={selectedImg} alt='przybliżony obraz' />
    </div>
  );
};

export default Modal;
