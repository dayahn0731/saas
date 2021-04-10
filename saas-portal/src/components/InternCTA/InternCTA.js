import React from "react";

function InternCTA() {
    return (
        <>
        <section className="max-w-8xl pt-4 mx-auto container bg-white">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 px-4 md:px-2 lg:px-12 py-10 flex items-center">
                    <img className="rounded" src="https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3367&q=80" alt />
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12">
                    <div className="pl-4">
                        <h3 className="text-xl  xl:text-4xl font-bold lg:leading-tight text-gray-800">Beautiful Hand Crafted Library for busy devs</h3>
                        <p className="text-base xl:text-xl text-gray-600 xl:leading-normal pt-4">Icons are designed to work best with CSS components, but they’ll work in any project. They’re SVGs, so they scale quickly and easily, can be implemented in several ways, and can be styled with CSS.</p>
                        <button className="my-4 lg:my-8 lg:mb-0 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none rounded text-white py-2 px-4  xl:px-8 xl:py-4 text-base xl:text-xl">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="max-w-8xl mx-auto container pt-12 bg-white">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/2 lg:w-6/12 px-4 md:px-8 justify-center">
                    <h3 className="text-xl md:text-2xl xl:text-4xl font-extrabold leading-tight text-gray-800 pt-6">Beautiful Hand Crafted Library for busy devs</h3>
                    <p className="text-sm md:text-base xl:text-xl font-light text-gray-600 xl:leading-normal pt-4">Welcome to Web Design Library, the ultimate source of all sorts of info that you need in your professional life. If you're new to Web Site Design.</p>
                    <div className="flex mb-6 md:mb-8 md:mb-0 mt-12">
                        <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 xl:px-8 xl:py-4 text-sm md:text-base xl:text-xl">Get Started</button>
                        <button className="ml-5 focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-4 py-2 xl:px-8 xl:py-4 text-sm md:text-base xl:text-xl">Learn More</button>
                    </div>
                </div>
                <div className="lg:w-6/12 md:w-1/2 relative mx-4 md:mx-4 lg:ml-20 md:mr-0 pt-12 md:pt-0 md:pt-0">
                    <img className="mt-16 pr-20 relative z-10 rounded w-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/cta/cta_2.png" alt="Glasses" />
                </div>
            </div>
        </section>
        </>
    );
}

export default InternCTA;