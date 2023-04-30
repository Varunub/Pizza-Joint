import React from "react";
import {motion} from "framer-motion"
import { useCycle } from "framer-motion";

const loaderVariant={
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            }
        }
    },
    animationTwo:{
        x:0,
        y:[0,-40],
        transition:{
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            }
        }
    }
}
const Loader=()=>{
    const [animation,cycleAnimation]=useCycle("animationOne","animationTwo");
    return(
        <>
        <motion.div
            variants={loaderVariant}
            animate={animation}
        >
            <div className="loader">

            </div>
        </motion.div>
        <div onClick={()=>cycleAnimation()} >
            Cycle Loader
        </div>
        </>
    )
}


export default Loader;