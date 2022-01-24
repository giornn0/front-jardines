import "../styles/globals.css";
import { Header } from "../components/Header";
import {Footer} from  "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
       
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <div className='w-100 h-max bg-gradient-color'>
        <Header className='header-height'></Header>
        <div className='h-90'>
          <Component {...pageProps} />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default MyApp;
