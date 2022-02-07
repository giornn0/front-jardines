import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import { FormControl, Input, InputAdornment } from "@mui/material";

import logo from "../public/logoDefinitivo.png";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [search, setSearch] = useState("");
  const cleanSearch = () => {
    setSearch("");
    searcher.focus(); //id from search input
  };
  const startSearch = () => {
    console.log(search);
    cleanSearch();
  };
  return (
    <nav className='w-full sticky top-0 flex flex-row md:justify-center justify-between items-center p-4 bg-gradient-color-header border-rose-300'>
      <div className='basis-1/4 flex justify-center item-center'>
        <Image
          src={logo}
          alt='logo'
          className='h-10 w-25 cursor-pointer'
          height='75'
          width='100'
          fixed='true'
        />
      </div>
      <div className=' basis-1/2 flex justify-around item-center'>
        <FormControl
          className='w-80 mx-3 px-4 rounded-md bg-red-200'
          variant='standard'
        >
          <Input
            fullWidth
            placeholder='Buscar ..'
            id='searcher'
            value={search}
            onKeyDown={(e) => {
              if (e.code === "Escape") return cleanSearch();
              if (e.code === "Enter") return startSearch();
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            startAdornment={
              <InputAdornment position='start'>
                <SearchSharpIcon />
              </InputAdornment>
            }
            endAdornment={
              search && (
                <InputAdornment position='end' className='gap-1'>
                  <CheckBoxSharpIcon
                    className='text-white cursor-pointer bg-slate-600 rounded-md p-1 my-2'
                    onClick={() => console.log("buscando!!")}
                  />
                  <CancelSharpIcon
                    className='text-white cursor-pointer bg-red-600 rounded-md p-1 my-2'
                    onClick={cleanSearch}
                  />
                </InputAdornment>
              )
            }
          />
        </FormControl>
      </div>
      <div className=' basis-1/4 flex justify-center item-center'>
        <div className='md:flex hidden flex-row w-100 justify-end item-center text-white'>
          <Link href='/login'>
            <p className='bg-[#000]  py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-[#2546bd]'>
              Login
            </p>
          </Link>
          <Link href='/register'>
            <p className='bg-[#000] py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-[#c46060]'>
              Registrar
            </p>
          </Link>
        </div>
      </div>
      <div className='flex relative'>
        {toggleMenu ? (
          <CloseRoundedIcon
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <MenuRoundedIcon
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className='z-10 fixed top-0  -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
            '
          >
            <li className='text-xl w-full my-4  '>
              <CloseRoundedIcon onClick={() => setToggleMenu(false)} />
              <button className='bg-[#2952e3]  py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-[black]'>
                Login
              </button>
              <button className='bg-[#2952e3] py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-[black]'>
                Registrar
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
