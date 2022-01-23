import "../styles/globals.css";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/> */}
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <div className='w-screen h-screen bg-gradient-color'>
        <Header className='h-10'></Header>
        <div className='h-90'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
