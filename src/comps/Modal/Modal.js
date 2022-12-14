import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion';
import './Modal.css';

const Modal = ({selectedImg, setSelectedImg}) => {

  const handleClick = (e) => {
    if(e.target.classList.contains('backdrop')){
        setSelectedImg(null);
    }
  }  
  
  return (
    <motion.div className = 'backdrop' onClick = {handleClick} 
        initial = {{ opacity: 0}}
        animate = {{ opacity: 1}}
    >
        <motion.img src = {selectedImg} alt= "uploaded-pic"
            initial = {{ y: "-100vh"}}
            animate = {{ y: 0}}
        />
    </motion.div>
  )
}

export default Modal