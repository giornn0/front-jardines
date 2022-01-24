import Image from 'next/image'
import loginImage from '../public/portrait.jpeg'

const Login = () => {
  return (
    <div className='flex w-full justify-center items-center bg-color h-screen'>
      <div className='flex basis-1/2 w-80'>
      </div>
      <div className='flex-1/2'>
        <Image
        className="opacity-40 w-full h-full"
        src={loginImage}
        alt="portrait"
        ></Image>
      </div>
    </div>
  );
};

export default Login;
