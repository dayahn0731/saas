import React, { useState } from "react";
import {Element} from 'react-scroll'

function StartupFAQs() {
    const [show, setShow] = useState(null);
    return (
        <>
         <Element name="FAQs"></Element>
            <div className="mx-auto container f-f-p px-4 xl:px-8 my-24 mb-0">
                <h1 className="text-center text-gray-800 text-2xl lg:text-5xl font-bold tracking-wider leading-10">FAQs</h1>
                <h2 className="text-center text-gray-700 text-base lg:text-lg tracking-wide mt-5">Slingshot sounds great. Tell me more!</h2>
                <div className="lg:flex flex-wrap py-8 md:py-10 lg:py-14 xl:py-20 text-lg">
                    <div className="lg:w-1/2 lg:pr-6">
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Is this just a summer thing?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 0 ? (
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
                            {show === 0 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Nope. Not at all. Interns are available for work full-time / part-time throughout the year.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">What kind of technical vetting does Slingshot do?</h1>
                                <div data-menu className="cursor-pointer">
                                    {show === 1 ? (
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
                            {show === 1 && (
                                <ul>
                                    <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Our interview process parallels those conducted at top FAANG companies. Between our team, we've given ~500 tech interviews and worked at several startups. We know what you're looking for. Plus if you have particular technial skills that you're looking for, we incorporate that too!</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Can I employ a minor?</h1>
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
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Yep! For early stage startups, we help with paperwork around the same.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">This sounds cool. How do I sign up?</h1>
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
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">We're currently an invite-only platform. To start onboarding, fill out this <a href="https://slingshotmentoring.typeform.com/to/WGNBeJRv"><u>form</u></a></p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-6">
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">What's does pricing look like?</h1>
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
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">We charge a placement fee per intern matched to you only after a 12 week period. Sign up today to get a quote!</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">What happens if an intern isn't a great fit?</h1>
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
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Even after our vetting, matching and your interview with the candidate, after a few weeks if it becomes clear that the intern is not a great fit, please reach out to us and we will re-assign you another intern at no additional charge.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">Why don't I just use Fiverr?</h1>
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
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">Unlike contracting services, we provide short-term talent that can fully integrate and collaborate with your team. These are high quality engineers who just happen to be young, but are motivated for all the right reasons and come to you at fractional costs of someone with the same competency. Good luck finding all that on Fiverr.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className="flex py-2 xl:py-4 mb-4 justify-between items-center border-b border-gray-200">
                                <h1 className="text-gray-700 tracking-wide">I love the mission. How can I help?</h1>
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
                                        <p className="xl:w-10/12 w-full text-gray-600 text-sm">We're changing how people think. It's hard. If you love the mission we're on, do consider spreading the word about us to fellow founders and founder networks. We'd truly appreciate it!</p>
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

export default StartupFAQs;