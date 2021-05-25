import React from "react";

function StartupCTA2() {
    return (
        <section className="pt-16 bg-white bg-gray-100">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-col justify-center items-center w-full md:w-9/12 px-4 lg:px-12">
                    <div className="text-center md:flex flex-col items-center">
                        <h3 className="text-3xl md:text-5xl font-extrabold md:leading-tight text-gray-800 md:w-3/4 pt-3 md:pt-6">Hire the Next Generation of Engineers.</h3>
                        <div className="flex justify-center flex-wrap">
                            <div className="m-6 py-8">
                                <a href="https://slingshotmentoring.typeform.com/to/WGNBeJRv"><button className="focus:outline-none bg-yellow-500 transition duration-150 ease-in-out hover:bg-yellow-400 rounded text-white px-4 py-2 text-base  md:px-8 md:py-4 md:text-xl">Start Today</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StartupCTA2;
