import { ColegioCard } from '../components/ColegioCard';
import Image from 'next/image'
import loginImage from '../public/portrait.jpeg'

const image1 = "https://static.toiimg.com/thumb/msid-80300740,width-400,resizemode-4/80300740.jpg"

const Login = () => {
  return (
    <div className='flex w-full justify-center items-center bg-color h-screen'>
      <div className='flex basis-1/2 '>
        <div className="flex flex-col border-rose-800">
        <input class="m-50 border-2 border-rose-600 ..."></input>
        <input class="m-50 border-2 border-green-300 ..."></input>
        <input class="m-50 border-2 border-rose-600 ..."></input>
        </div>
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
