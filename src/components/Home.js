import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Loader from './Loader';
const Home = () => {
  return (
    <motion.div className="home container"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1.5,duration:1.5}}
    exit={{x:"-100vh",transition:{ease:"easeInOut"}}}

    >
      <h2>
        <motion.h2 animate={{}}>
        Welcome to Pizza Joint
        </motion.h2>
        
      </h2>
      <Link to="/base">
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
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader></Loader>
    </motion.div>
  )
}

export default Home;