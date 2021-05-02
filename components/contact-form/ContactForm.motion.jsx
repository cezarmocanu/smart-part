import { motion, AnimatePresence } from "framer-motion"

function FormControlMotion({children}){
    const variants = {
        hidden:{
            opacity: 0,
            x: -100
        },
        visible:{
            opacity: 1,
            x: 0,
            transition:{
                delay:0.3
            }
        }
    };
    
    return (
        <motion.div initial="hidden" animate="visible"  variants={variants} style={{width:'100%', height:'100%'}}>
            {children}
        </motion.div>
    )
};


function AlertMotion({children}){
    const variants = {
        hidden:{
            opacity: 0,
            y: 50
        },
        visible:{
            opacity: 1,
            y: 0,
            transition:{
                delay:0.3
            }
        }
    };
    
    return (
        <motion.div initial="hidden" animate="visible"  variants={variants} style={{width:'100%', height:'100%'}}>
            {children}
        </motion.div>
    )
};



export {FormControlMotion, AlertMotion};