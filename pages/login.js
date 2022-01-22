import { ColegioCard } from '../components/ColegioCard';
import Image from 'next/image'
import loginImage from '../public/portrait.jpeg'

const image1 = "https://static.toiimg.com/thumb/msid-80300740,width-400,resizemode-4/80300740.jpg"

const Login = () => {
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex flex-1 justify-center'>
          <ColegioCard></ColegioCard>
        </div>
        <div className='flex flex-1 justify-center'>
          <Image 
            src={loginImage}
            alt="portrait"
            width="200"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
