import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
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
    <motion.div className="base container"
    variants={containervariant}
    initial="initial"
    animate="animate"
    transition={{delay:0.5,type:"spring"}}
    exit={{x:"-100vh",transition:{ease:"easeInOut"}}}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
            whileHover={{scale:1.1,color:"yellow",originX:0}}
            transition={{type:"spring",stiffness:300}}
            key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants={divVariant}    
        >
          <Link to="/toppings">
            <motion.button
            whileHover={{scale:1.1,
              textShadow:"0px 0px 8px rgb(255,255,255)",
              boxShadow:"0px 0px 8px rgb(255,255,255)",
              transition:{
                duration:0.3,
                yoyo:Infinity
              }
            }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;