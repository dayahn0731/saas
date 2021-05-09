import React from "react";

function StartupCTA2() {
    return (
        <section className="max-w-8xl mx-auto container pt-16 bg-white">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-col justify-center items-center w-full md:w-9/12 px-4 lg:px-12">
                    <div className="text-center md:flex flex-col items-center w-full">
                        <h3 className="text-3xl md:text-5xl font-extrabold md:leading-tight text-gray-800 md:w-3/4 pt-3 md:pt-6">Start hiring the next generation of engineers.</h3>
                        <div className="flex justify-center flex-wrap">
                            <div className="m-6 my-12">
                                <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-base  md:px-8 md:py-4 md:text-xl">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StartupCTA2;
