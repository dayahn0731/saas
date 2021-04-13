import React, { useEffect } from "react";
function InternTestimonials() {
    useEffect(() => {
        let slides = document.querySelectorAll(".slide-ana>div");
        let slideSayisi = slides.length;

        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        for (let index = 0; index < slides.length; index++) {
            const element = slides[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        let loop = 0 + 1000 * slideSayisi;

        function goNext() {
            loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        function goPrev() {
            loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        next.addEventListener("click", goNext);
        prev.addEventListener("click", goPrev);
        document.addEventListener("keydown", function (e) {
            if (e.code === "ArrowRight") {
                goNext();
            } else if (e.code === "ArrowLeft") {
                goPrev();
            }
        });
    });
    return (
        <>
            <div className="relative py-4 md:py-24 lg:py-36 bg-black">
                <div className="w-full xl:px-0 px-4 lg:flex-row flex flex-col-reverse items-center justify-between mx-auto container relative">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="slider">
                            <div className="slide-ana">
                                <div
                                    className="w-full"
                                    style={{
                                        transform: "translateX(0%)",
                                    }}
                                >
                                    <div className="w-full lg:flex relative">
                                        <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                                <div className="flex flex-col">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold">Anika Thatavarthy</h2>
                                                    <h3 className="text-sm f-m-m ml-4">17 y/o, Thomas Jefferson</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3">I got so much <b>ownership</b> on what I was working on - something that you don't always get. My intern project was <b>extremely personalized & catered</b> to my core skills & interests.</p>
                                        </div>
                                        <div className="lg:w-1/2 relative bg-indigo-700 rounded-md p-6 mr-6 shadow-lg">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(255,255,255,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                                <div className="flex flex-col text-white">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold">Tajwar Rahman</h2>
                                                    <h3 className="text-sm f-m-m ml-4">16 y/o, Bronx High</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3 text-white">Slingshot is a <b>win-win</b> - You get to intern and learn under <b>brilliant people</b> who went to <b>top colleges</b> and <b>great companies</b>. To top it off, it's <b>100% free</b>.</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                                        <div className="absolute right-0 top-0 -mt-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                            <div className="flex flex-col">
                                                <h2 className="text-base f-m-m ml-4 font-semibold">Aditi</h2>
                                                <h3 className="text-sm f-m-m ml-4">16 y/o, Troy High</h3>
                                            </div>
                                        </div>
                                        <p className="text-base f-m-m mt-3">Working at Slingshot has been an <b>extremely rewarding</b> experience - I’ve learned more from my 3 months as an intern here than <b>any other program or camp</b> I’ve attended.</p>
                                    </div>
                                </div>
                                <div
                                    className="w-full"
                                    style={{
                                        transform: "translateX(100%)",
                                    }}
                                >
                                    <div className="w-full lg:flex relative">
                                        <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                                <div className="flex flex-col">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold">David Chen</h2>
                                                    <h3 className="text-sm f-m-m ml-4">16 y/o, Princeton High school</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3">Slingshot is bringing students with <b>shared passions</b> together to learn and contribute to amazing startups. It is a great place for <b>collaboration</b> and finding what you love.</p>
                                        </div>
                                        <div className="lg:w-1/2 relative bg-indigo-700 rounded-md p-6 mr-6 shadow-lg">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(255,255,255,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                                <div className="flex flex-col text-white">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold">Anujay Surana</h2>
                                                    <h3 className="text-sm f-m-m ml-4">15 y/o, Gems Modern, Dubai</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3 text-white">-------.</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                                        <div className="absolute right-0 top-0 -mt-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                            <div className="flex flex-col">
                                                <h2 className="text-base f-m-m ml-4 font-semibold">Antonio Scott</h2>
                                                <h3 className="text-sm f-m-m ml-4">15 y/o, GSMST</h3>
                                            </div>
                                        </div>
                                        <p className="text-base f-m-m mt-3">------.</p>
                                    </div>
                                </div>
                                <div
                                    className="w-full"
                                    style={{
                                        transform: "translateX(200%)",
                                    }}
                                >
                                    <div className="w-full lg:flex relative">
                                        <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center">
                                                <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                                <div className="flex flex-col">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold">Manav Sankaran</h2>
                                                    <h3 className="text-sm f-m-m ml-4">15 y/o, Gems Modern, Dubai</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3">--------.</p>
                                        </div>
                                        <div className="lg:w-1/2 relative bg-indigo-700 rounded-md p-6 mr-6 shadow-lg">
                                            <div className="absolute right-0 top-0 -mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(255,255,255,1)" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center text-white">
                                                <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                                <div className="flex flex-col">
                                                    <h2 className="text-base f-m-m ml-4 font-semibold">Shivang Patel</h2>
                                                    <h3 className="text-sm f-m-m ml-4">15 y/o, GSMST</h3>
                                                </div>
                                            </div>
                                            <p className="text-base f-m-m mt-3">--------.</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                                        <div className="absolute right-0 top-0 -mt-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="rgba(76,81,191,1)" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <img src="https://cdn.tuk.dev/assets/components/111220/tst-15/Ellipse 7.png" />
                                            <div className="flex flex-col">
                                                <h2 className="text-base f-m-m ml-4 font-semibold">Shivang Patel</h2>
                                                <h3 className="text-sm f-m-m ml-4">15 y/o, GSMST</h3>
                                            </div>
                                        </div>
                                        <p className="text-base f-m-m mt-3">--------.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-24 xl:pl-48">
                        <h1 className="lg:text-5xl text-2xl f-m-w text-white font-bold">We can't stop hearing...</h1>
                        <p className="lg:text-xl text-lg f-m-m leading-loose mt-3 mb-8 text-white">"Slingshot is what we've always been waiting for." Teachers, students, schools can't stop telling us how much Slingshot means to them!</p>
                        <div className="flex items-center">
                            <div id="prev" className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                    <line x1={5} y1={12} x2={9} y2={16} />
                                    <line x1={5} y1={12} x2={9} y2={8} />
                                </svg>
                            </div>
                            <div id="next" className="cursor-pointer ml-4 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                    <line x1={15} y1={16} x2={19} y2={12} />
                                    <line x1={15} y1={8} x2={19} y2={12} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`

        /* Slider css below */
        .slider {
            width: 100%;
            height: 500px;
            padding-top: 14px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
        }

        .slide-ana {
            height: 100%;
        }

        .slide-ana>div {
            width: 100%;
            height: 100%;
            position: absolute;
            transition: all 1s;
        }

        @media (min-width: 320px) and (max-width: 1023px) {
            .slider .left {
                margin-left: 40% !important;
            }

            .slider .right {
                margin-left: 50% !important;
            }

            .slider {
                height: 650px;
            }
        }`}
            </style>
        </>
    );
}

export default InternTestimonials;