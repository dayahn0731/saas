import React from "react";

function Stat() {
    return (
        <>
            <div className="w-full flex justify-center items-center relative py-24">
                <div className="flex flex-col lg:flex-row items-center mx-auto container relative">
                    <div className="flex flex-col items-center text-black w-1/4">
                        <h1 className="text-6xl font-semibold">1000+</h1>
                        <h2 className="text-lg font-semibold pt-5">Student engineers</h2>
                    </div>
                    <div className="pt-10 lg:pt-0 flex flex-col items-center text-black w-1/4">
                        <h1 className="text-6xl font-semibold">980+</h1>
                        <h2 className="text-lg font-semibold pt-5">Discord members</h2>
                    </div>
                    <div className="pt-10 lg:pt-0 flex flex-col items-center text-black w-1/4">
                        <h1 className="text-6xl font-semibold">25+</h1>
                        <h2 className="text-lg font-semibold pt-5">Top CS school startups</h2>
                    </div>
                    <div className="pt-10 lg:pt-0 flex flex-col items-center text-black w-1/4">
                        <h1 className="text-6xl font-semibold">30+</h1>
                        <h2 className="text-lg font-semibold pt-5">Global Partners</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stat;