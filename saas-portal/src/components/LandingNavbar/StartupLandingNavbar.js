import React, {useState} from 'react';
import logo from "./logo.png";

function StartupLandingNavbar() {
    const [show, setShow] = useState(false);
    return (
        <>
        <div className="bg-gray-100 py-4 md:py-6 z-20"  style={{position: "sticky", top: 0}}>
            <header className="mx-auto container px-4 xl:px-8">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img aria-label="Home" className="w-48 h-18" id="logo" enableBackground="new 0 0 300 300" src={logo} alt="Coffee" />
                    </a>
                     {/* Commented till portal + hire talent pages are ready */}
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
                                <li className="flex items-center">
                                    <a href="https://slingshotmentoring.typeform.com/to/WGNBeJRv"><button className="focus:outline-none transition duration-150 ease-in-out hover:opacity-80 rounded border border-yellow-500 bg-yellow-500 text-white px-6 py-3 text-sm mt-10 md:mt-0">Get started</button></a>
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

export default StartupLandingNavbar;