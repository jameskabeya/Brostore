import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const phoneNumber = '0990777364';
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-blue-800 text-white w-full fixed top-0 left-0 right-0 z-50 shadow-md p-4">
            <div className="flex justify-between items-center">
                <div>
                    <Link to='/'>
                        <img src="./src/assets/logo.svg" alt="" />
                    </Link>
                </div>
                <div>
                    {/* <p>Contact Us</p> */}
                    <p className='flex gap-2 mt-2'><a className='' href={`tel:${phoneNumber}`}><img src="./src/assets/phonenumber.png" /></a></p>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
                            <path fillRule="evenodd" d="M3 9h14a1 1 0 010 2H3a1 1 0 010-2zM3 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex md:items-center md:gap-4">
                    <Link to='/'>
                        <button className="font-bold hover:underline">HOME</button>
                    </Link>
                    <Link to='/styles'>
                        <button className="font-bold hover:underline">STYLES</button>
                    </Link>
                    <Link to='/Manstyles'>
                        <button className="font-bold hover:underline">MAN STYLES</button>
                    </Link>
                    <Link to='/womenstyles'>
                        <button className="font-bold hover:underline">WOMAN STYLES</button>
                    </Link>
                    <Link to='/About'>
                        <button className="font-bold hover:underline">ABOUT US</button>
                    </Link>
                </div>
            </div>
            <div className={`md:hidden fixed top-0 left-0 h-full w-full bg-blue-800 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-center items-center mt-20 flex-col ml-4">
                    <Link to='/'>
                        <button onClick={closeMenu} className="font-bold hover:underline">HOME</button>
                    </Link>
                    <Link className='mt-4' to='/styles'>
                        <button onClick={closeMenu} className="font-bold hover:underline">STYLES</button>
                    </Link>
                    <Link className='mt-4' to='/Manstyles'>
                        <button onClick={closeMenu} className="font-bold hover:underline">MAN STYLES</button>
                    </Link>
                    <Link className='mt-4' to='/womenstyles'>
                        <button onClick={closeMenu} className="font-bold hover:underline">WOMAN STYLES</button>
                    </Link>
                    <Link className='mt-4' to='/About'>
                        <button onClick={closeMenu} className="font-bold hover:underline">ABOUT US</button>
                    </Link>
                    <Link className='mt-4' to='/LoginPage'>
                        <button onClick={closeMenu} className="font-bold hover:underline">CONNEXION</button>
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Header;
