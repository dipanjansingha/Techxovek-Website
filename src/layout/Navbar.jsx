import { transparent } from '../assets/images';
import { navLinks } from '../constants';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../components/Button';
import { useState } from 'react';

const Navbar = () => {
    const [toggleMenu, setToggle] = useState(false);

    return (
        <>
            <nav className="w-full flex py-2 justify-between items-center navbar relative z-50">
                <img
                    src={transparent}
                    alt="techxovek"
                    className="w-[172px] h-[60px] object-contain"
                />

                <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-bold cursor-pointer md:text-[16px] sm:text-[14px] text-[#989797] 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                        hover:text-[#fff] hover:font-[600] transition`}
                        >
                            <ScrollLink
                                to={`${nav.id}`}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                {nav.title}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
                <ScrollLink
                    to="connect"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    <Button
                        label="Contact Us"
                        styles="sm:flex hidden z-40 btn border-[2.5px] text-white"
                    />
                </ScrollLink>

                <div
                    className="sm:hidden flex flex-1 justify-end items-center cursor-pointer"
                    onClick={() => setToggle(prev => !prev)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`w-10 h-10 text-white ${
                            toggleMenu ? 'hidden' : 'initial'
                        }`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`w-10 h-10 ${!toggleMenu ? 'hidden' : 'initial'}`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </nav>

            <div
                className={`${
                    toggleMenu ? 'flex' : 'hidden'
                } sm:hidden bg-[#cdcdcf] fixed top-0 right-0 z-[45] w-[200px] h-screen`}
            >
                <ul className="list-none flex flex-col justify-start items-start flex-1 py-4 px-2 mt-10">
                    {navLinks.map(nav => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal flex gap-5 items-center cursor-pointer text-[16px]                                
                               hover:bg-[#949494] hover:rounded-md py-4 pl-2 w-full hover:font-[600] transition my-1`}
                        >
                            <img
                                src={nav.icon}
                                className="w-6"
                                alt={nav.title}
                            />
                            <a href={`${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
