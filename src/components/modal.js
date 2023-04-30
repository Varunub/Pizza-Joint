import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {motion,AnimatePresence} from 'framer-motion'


const backdrop={
    initial:{opacity:1},
    animate:{opacity:0}
}

const Modal=(({showModal})=>{
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="initial"
                    animate="animate"
                >

                </motion.div>
            )}
        </AnimatePresence>
    )    
})

export default Modal;