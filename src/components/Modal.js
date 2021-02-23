import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    // adding if statement we make sure that img wont't close, unless clicked in background
    e.target.classList.contains('backdrop');
    setSelectedImg(null);
    //will close selected image
  };

  return (
    <motion.div
      className='backdrop'
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5}}
    >
      <motion.img src={selectedImg} alt='przybliżony obraz' 
        initial = {{ y: "-100vh" }}
        animate = {{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
