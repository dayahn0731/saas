import React, { useState } from "react";

function InternFAQs() {
    const [show, setShow] = useState(null);
    return (
        <>
            <div className="mx-auto container f-f-p px-4 xl:px-0 my-24">
                <h1 className="text-center text-gray-800 text-2xl lg:text-5xl font-bold tracking-wider leading-10">Frequently Asked Questions</h1>
                <h2 className="text-center text-gray-700 text-base lg:text-lg tracking-wide mt-5">Slingshot is too good to be true. Tell me more!</h2>
                <div className="lg:flex flex-wrap py-8 md:py-10 lg:py-14  xl:py-20 text-lg">
                    <div className="lg:w-1/2 lg:pr-6">
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">When do internships begin?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show == 0 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(0)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show == 0 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">You can find internships full-time / part-time all around the year. Sign up on our platform to find one today!</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">What kind of startups do we get to work with?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show == 1 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(1)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show == 1 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">All of our startups work on cutting-edge innovations that want to make the world a better place. They use state-of-the-art technologies such as Artifical Intelligence, Machine Learning, Blockchain, Distributed Systems -- stuff that you'll work on :)</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Which are the network hospitals in your vicinity?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 2 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(2)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 2 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="text-gray-800 text-lg xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Which are the network hospitals in your vicinity?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 3 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(3)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 3 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="text-gray-800 text-lg xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-6">
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Which are the network hospitals in your vicinity?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 4 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(4)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 4 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="text-gray-800 text-lg xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Which are the network hospitals in your vicinity?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 5 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(5)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 5 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="text-gray-800 text-lg xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Which are the network hospitals in your vicinity?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 6 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(6)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 6 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="text-gray-800 text-lg xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Which are the network hospitals in your vicinity?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 7 ? (
                                        <svg onClick={() => setShow(null)} xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setShow(7)} xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {show === 7 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="text-gray-800 text-lg xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InternFAQs;