import React, {useState} from 'react';
import logo from "../../assets/images/logo.png";

function LandingNavbar() {
    const [show, setShow] = useState(false);
    return (
        <>
        <div className="bg-gray-100 py-4 md:py-6">
            <header className="mx-auto container px-4 xl:px-0">
                <div className="flex items-center justify-between">
                    <a href="javascript: void(0)">
                        <img aria-label="Home" className="w-48 h-18" id="logo" enableBackground="new 0 0 300 300" src={logo} alt="Coffee" />
                    </a>
                    <div>
                        <div onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={4} y1={6} x2={20} y2={6} />
                                <line x1={4} y1={12} x2={20} y2={12} />
                                <line x1={4} y1={18} x2={20} y2={18} />
                            </svg>
                        </div>
                        <div id="menu" className={show ? " lg:hidden block" : "md:block lg:block hidden"}>
                            <div onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-6">
                                <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                            <ul className="flex md:flex text-3xl md:text-base lg:text-base lg:flex flex-col md:flex-row lg:flex-row justify-center items-center fixed md:relative lg:relative top-0 bottom-0 left-0 right-0 bg-gray-100 z-20">
                                <li className="md:mr-8 lg:mr-10 flex items-center">
                                    <a className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">
                                        Hire Talent
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-6 py-3 text-sm mt-10 md:mt-0"><a href="/signin">Sign in</a></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        </>
    )
}

export default LandingNavbar;