import {motion} from 'framer-motion';

function MotionHover({children}){
    const hover = {
        scale: 1.1,
        zIndex:2,
        transition:{
            duration: 0.4
        }
    };


    return (
        <motion.div whileHover={hover}>
            {children}
        </motion.div>
    );
}

export {MotionHover};
