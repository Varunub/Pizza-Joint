import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
  const containervariant={
    initial:{x:1000},
    animate:{
      x:0,
      transition:{delay:0.5,type:"spring"}
    }
  }
  const divVariant={
    initial:{
      x:1000
    },
    animate:{
      x:0,
      transition:{type:"spring",stiffness:120}
    }
  }
  return (
    <motion.div className="toppings container"
    variants={containervariant}
    initial="initial"
    animate="animate"
    exit={{x:"-100vh",transition:{ease:"easeInOut"}}}
    
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
            whileHover={{scale:1.1,color:"yellow",originX:0}}
            transition={{type:"spring",stiffness:300}}
            key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}
              >{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        whileHover={{scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",
          transition:{
            duration:0.3,
            yoyo:Infinity
          }
        }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;