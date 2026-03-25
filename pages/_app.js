// MindHaven Wellness - App Component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Import Bootstrap JS on client side only
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
