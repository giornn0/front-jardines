import {useState} from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const NavbarItem = ({title,classProps})=>{
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

export const Header = ()=>{
  const [toggleMenu, setToggleMenu] = useState(false)
  const options= ["Market","Exchange","Tutorials","Wallets"]
  return (

  <nav className="w-full flex md:justify-center justify-between items-center p-4 bg-gradient-color-header border-rose-300">
      <div className="md:flex-[0.5] flex-initial justify-center item-center">
        {/* <Image src={logo} alt="logo" className="w-32 cursor-pointer"/> */}
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {options.map((title, index)=>(
          <NavbarItem key={`item-${index}`} title={title} classProps=""/>
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
          {toggleMenu ?
          <CloseRoundedIcon className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)} />
          :<MenuRoundedIcon className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu  && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
            "
          >
            <li className="text-xl w-full my-2">
              <CloseRoundedIcon onClick={()=>setToggleMenu(false)}/>
              {options.map((title, index)=>(
              <NavbarItem key={`item-${index}`} title={title} classProps="my-2 text-lg"/>
          ))}
            </li>
          </ul>
          )
        }
      </div>
    </nav>
  )
}