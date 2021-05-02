import 'bootstrap/dist/css/bootstrap.min.css';
import '@Styles/Theme.scss';
import '@Styles/global.scss';
import {motion} from 'framer-motion';

function AppMotion({children, router}) {
  const variants = {
      hidden:{opacity:0},
      visible:{
        opacity:1,
        transition: {
          delay:0.4
        }
      }
  };
  return (
    <motion.div key={router} initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  )
}

function MyApp({ Component, pageProps, router}) {
  return (
    <AppMotion router={router}>
      <Component {...pageProps} csrfToken={undefined} />
    </AppMotion>
  )
};

export default MyApp;