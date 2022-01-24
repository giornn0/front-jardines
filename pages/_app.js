import "../styles/globals.css";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    const getLayout = Component.getLayout
    return (
      <>
      <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/icon?family=Material+Icons'
    />
      <div className='w-100 h-max bg-gradient-color'>
        {
          getLayout(<Component {...pageProps} />)
        }
      </div>
      </>
    ) 
  }
  else{
    return (<>
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/> */}
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <div className='w-100 h-max bg-gradient-color'>
        <Header className='header-height'></Header>
        <div className='h-90'>
          <Component {...pageProps} />
        </div>
      </div>
    </>)
  }
}

export default MyApp;
