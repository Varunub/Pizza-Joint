import React from 'react';
import { useState } from 'react';
import { motion ,AnimatePresence } from 'framer-motion';
const Order = ({ pizza }) => {
  // const [showTitle,removeTitle]=useState(true)
  // setTimeout(()=>{
  //   removeTitle(false)
  // },4000)
  const containervariant={
    initial:{x:1000},
    animate:{
      x:0,
      transition:{mass:0.4,type:"spring",when:"beforeChildren",dampping:8,staggerChildren:0.}
    }
  }
  const divVariant={
    initial:{
      opacity:0
    },
    animate:{
      opacity:1,
    }
  }
  return (
    <motion.div className="container order"
    variants={containervariant}
    initial="initial"
    animate="animate"
    >
      {/* <AnimatePresence>
        {showTitle && <motion.h2
        exit={{y:-1000}}
        >Thank you for your order :)</motion.h2>}
      </AnimatePresence> */}
      <motion.h2>Thank you for your order :)</motion.h2>
      <motion.div
        variants={divVariant}
      >
        <p>You ordered a {pizza.base} pizza with:</p>     
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;