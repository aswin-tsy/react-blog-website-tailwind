import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaDribbble, FaBars, FaXmark  } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {

    const navItems =[
        {path:'/', link:"Home"},
        {path:'/blogs', link:"Blog"},
        {path:'/about', link:"About"},
        {path:'/contact', link:"Contact"},
        {path:'/services', link:"Services"},
      
    ]
    const [isMenuOpened,setMenuOpened] = useState(false);
    const [isModalOpened, setModalOpened] = useState(false);

    const openModal = () => {

        setModalOpened(true);
    }

    const closeModal = ()=>{
        setModalOpened(false);
    }

    const toggleMenu = ()=>{
        setMenuOpened(!isMenuOpened);
    }
  return (
   <header className='bg-black fixed top-0 left-0 right-0'>
    <nav className='px-4 py-4 max-w-[1400px] flex justify-between m-auto items-center'>
        <a href='/' className='text-xl font-bold text-white'>Design<span className='text-orange-400'>DK</span></a>
        <ul className='text-white md:flex gap-12 text-lg hidden '>
            {
                navItems.map(({path,link})=><li key={path}>
                    <NavLink className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "active" : ""} to={path}>{link}</NavLink>
                </li>)
            }
        </ul>

        <div className='md:flex gap-4 items-center hidden'>
            <a href='/' className='text-white hover:text-orange-200'><FaFacebook/></a>
            <a href='/' className='text-white hover:text-orange-200'><FaInstagram/></a>
            <a href='/' className='text-white hover:text-orange-200'><FaDribbble/></a>
            <button onClick={()=>openModal()} className='cursor-pointer text-white bg-orange-500 py-2 px-6 font-medium hover:bg-white rounded-lg hover:text-orange-500'>Login</button>
        </div>
            {/* Modal element */}

        <Modal isModalOpened={isModalOpened} closeModal ={closeModal}/>

        <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white'>
                {
                   isMenuOpened? <FaXmark size={25}/> : <FaBars size={25}/>
                }   
            </button>
        </div>

        
    </nav>

    <div className='mt-4 '>
        <ul className= {`text-black/ md:hidden  font-bold bg-gray-200 shadow-lg rounded-lg m-auto flex flex-col gap-12 text-lg px-4 mt-14
             ${isMenuOpened ? "fixed top-0 left-0 w-full  transition-all ease-in duration-150":"hidden"}`}>
            {
                navItems.map(({path,link})=><li key={path}>
                    <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                </li>)
            }
        </ul>
        </div>
   </header>
  )
}

export default Navbar;
