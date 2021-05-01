import 'bootstrap/dist/css/bootstrap.min.css';
import '@Styles/Theme.scss';
import '@Styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} csrfToken={undefined} />
  )
};

export default MyApp;