import {motion} from 'framer-motion';

function TitleMotion({children}){
    const variants = {
        hidden:{
            scale: .8,
            opacity: 0,
            y:100
        },
        visible: {
            scale:1,
            opacity:1,
            y:0,
            transition:{
                delay: 0.4,
                type: "spring", 
                stiffness: 100
            }
        }
    };
    
    return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
        {children}
    </motion.div>
    );
};

function ItemsMotion({children}){

};

export{
    TitleMotion
};