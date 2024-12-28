/**
  @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */



import React, {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


const Reveal = ({
    children, 
    width = "fit-content"
}) => {

    const ref = useRef(null);
    const inView = useInView(ref, {threshold: 0.7, once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [inView]);

  return (
    <div 
        ref={ref}
        style={{ position: "relative", width: width === "fit-content" ? "fit-content" : "100%", overflow: "hidden" }}
    >
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: "0%"},
                    visible: {left: "100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 6,
                    bottom: 6,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 50%, rgba(255, 255, 255, 0) 100%)",
                    zIndex: 20,
                }}
            />
    </div>
  )
}

export default Reveal
