import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Skills'
        },
        {
            id: 4,
            link: 'Contact'
        },

    ]
    return (
        <div className='flex justify-center items-center w-full h-20 text-slate-700 bg-white fixed z-10'>
            <div className=' text-5xl ml-2 hover:scale-105 duration-200 cursor-pointer'>
                <Link to={'Home'} smooth duration={500}>srijith v.</Link>
            </div>
                <ul className='hidden md:flex'>
                    {links.map(({id, link}) =>
                    <li key = {id} className='text-xl px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                    )}
                </ul>
                <div onClick={() =>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                    {nav ? <FaTimes size = {30}/> : <FaBars size = {30}/> }
                </div>

                {nav && (
                    <ul className='flex flex-col w-full h-screen bg-gradient-to-b from-black to-gray-800
                    text-gray-500'>
                        {links.map(({id, link}) =>
                        <li key = {id} className='px-4 py-4 cursor-pointer font-thin text-gray-500 hover:scale-105 duration-200 text-3xl'>
                            <Link to={link} className="anchor" smooth duration={500}>{link}</Link>
                        </li>
                        )}
                    </ul>
                )}
        </div>
    )
}

export default NavBar