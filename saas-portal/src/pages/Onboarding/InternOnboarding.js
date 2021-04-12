import React, { useRef } from "react";

// assets
import logo from "../../assets/images/logo.png";

const InternOnboarding = () => {
    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        // console.log("payload", payload);
        // Place your API call here to submit your payload.
    };
    return (
        <div className="w-screen h-screen">
            <form ref={form} onSubmit={handleSubmit} className="w-screen h-screen">
                <div className="h-screen w-screen shadow bg-white dark:bg-gray-800 rounded">
                    <div className="flex flex-wrap w-screen h-screen">
                        <div className="xl:w-1/5 w-full lg:w-1/5 py-5 bg-gray-100 dark:bg-gray-700 px-12 relative border-gray-500 border-r rounded-tl">
                            <div className="absolute bottom-0 right-0 text-indigo-700 dark:text-indigo-600">
                                <svg width={96} height={150} xmlns="http://www.w3.org/2000/svg">
                                    <g fill="currentColor" fillRule="evenodd">
                                        <path d="M77.924 158.943a2.14 2.14 0 00-2.56 1.606 2.14 2.14 0 004.172.945 2.13 2.13 0 00-1.612-2.55zm-14.418-5.024a2.144 2.144 0 00-2.858.994 2.13 2.13 0 00.999 2.846 2.144 2.144 0 002.857-.993 2.129 2.129 0 00-.998-2.847zm-12.93-8.106a2.144 2.144 0 00-3.007.336 2.127 2.127 0 00.337 2.996c.924.735 2.27.584 3.007-.336a2.127 2.127 0 00-.337-2.996zm-10.806-10.76a2.145 2.145 0 00-3.007-.336 2.129 2.129 0 00-.337 2.998 2.147 2.147 0 003.008.334 2.126 2.126 0 00.336-2.996zm-8.142-12.874a2.142 2.142 0 00-2.858-.992 2.127 2.127 0 00-.995 2.847 2.143 2.143 0 002.857.992 2.128 2.128 0 00.996-2.847zm-5.051-14.358a2.141 2.141 0 00-2.562-1.605 2.133 2.133 0 00-1.61 2.553 2.14 2.14 0 002.561 1.604 2.132 2.132 0 001.61-2.552zm-1.708-15.124c0-1.177-.959-2.13-2.141-2.13a2.136 2.136 0 00-2.138 2.134 2.137 2.137 0 002.14 2.13 2.136 2.136 0 002.14-2.134zm1.682-15.126a2.132 2.132 0 00-1.615-2.55 2.14 2.14 0 00-2.559 1.609 2.13 2.13 0 001.615 2.55 2.14 2.14 0 002.559-1.61zm5.03-14.37a2.13 2.13 0 00-1-2.845 2.143 2.143 0 00-2.856.996 2.127 2.127 0 001 2.845 2.141 2.141 0 002.855-.996zm8.124-12.889a2.127 2.127 0 00-.34-2.996 2.144 2.144 0 00-3.007.338 2.127 2.127 0 00.34 2.996c.925.734 2.27.581 3.007-.338zm10.789-10.777a2.125 2.125 0 00.333-2.996 2.147 2.147 0 00-3.008-.333 2.128 2.128 0 00-.332 2.998 2.145 2.145 0 003.007.331zm12.912-8.124a2.127 2.127 0 00.993-2.846 2.143 2.143 0 00-2.86-.99 2.13 2.13 0 00-.992 2.847 2.142 2.142 0 002.859.99zm14.405-5.046a2.132 2.132 0 001.608-2.554 2.14 2.14 0 00-4.171.952 2.139 2.139 0 002.563 1.602zM92.76 21.563c-.526 0-1.042.213-1.414.585a2.015 2.015 0 00-.585 1.415c0 .526.213 1.041.585 1.413a2.01 2.01 0 001.415.587c.526 0 1.04-.214 1.414-.587.372-.372.586-.887.586-1.413 0-.527-.214-1.043-.586-1.415a2.017 2.017 0 00-1.414-.585M74.552 179.93a2.137 2.137 0 00-2.533 1.642 2.137 2.137 0 004.18.881 2.127 2.127 0 00-1.647-2.523zm-17.7-5.727a2.14 2.14 0 00-2.822 1.078 2.127 2.127 0 001.08 2.811 2.138 2.138 0 002.822-1.077 2.124 2.124 0 00-1.08-2.812zm-16.11-9.284a2.144 2.144 0 00-2.985.468 2.126 2.126 0 00.471 2.975 2.141 2.141 0 002.984-.47 2.125 2.125 0 00-.47-2.973zm-13.83-12.411a2.141 2.141 0 00-3.017-.156 2.124 2.124 0 00-.157 3.006c.79.874 2.14.943 3.018.156a2.124 2.124 0 00.156-3.006zm-10.952-14.99a2.138 2.138 0 00-2.918-.775 2.124 2.124 0 00-.78 2.908 2.141 2.141 0 002.92.777 2.125 2.125 0 00.778-2.91zm-7.578-16.923a2.14 2.14 0 00-2.693-1.365 2.128 2.128 0 00-1.37 2.682 2.138 2.138 0 002.691 1.367 2.128 2.128 0 001.372-2.684zm-3.863-18.134a2.134 2.134 0 00-2.345-1.896 2.131 2.131 0 00-1.903 2.338 2.133 2.133 0 002.345 1.897 2.131 2.131 0 001.903-2.34zm-.011-18.547a2.13 2.13 0 00-1.906-2.336 2.134 2.134 0 00-2.344 1.9 2.129 2.129 0 001.906 2.335 2.134 2.134 0 002.344-1.899zm3.84-18.146a2.127 2.127 0 00-1.375-2.68 2.138 2.138 0 00-2.69 1.369 2.125 2.125 0 001.374 2.68 2.138 2.138 0 002.69-1.369zm7.564-16.942a2.126 2.126 0 00-.782-2.908 2.141 2.141 0 00-2.918.779 2.123 2.123 0 00.781 2.908 2.14 2.14 0 002.919-.78zM26.85 33.822a2.124 2.124 0 00-.161-3.006 2.14 2.14 0 00-3.017.159 2.123 2.123 0 00.16 3.006 2.143 2.143 0 003.018-.16zm13.813-12.425a2.125 2.125 0 00.468-2.975 2.142 2.142 0 00-2.986-.466 2.125 2.125 0 00-.467 2.975 2.141 2.141 0 002.985.466zm16.091-9.298a2.126 2.126 0 001.079-2.813 2.139 2.139 0 00-2.822-1.074 2.124 2.124 0 00-1.078 2.813 2.139 2.139 0 002.821 1.074zm17.688-5.746a2.13 2.13 0 001.645-2.525 2.135 2.135 0 00-2.534-1.639 2.127 2.127 0 00-1.645 2.525 2.137 2.137 0 002.534 1.639zM93.287.474a2.01 2.01 0 00-1.415.587 2.012 2.012 0 00-.585 1.413c0 .527.213 1.043.585 1.415.372.372.888.585 1.415.585s1.041-.213 1.415-.585c.372-.372.585-.888.585-1.415 0-.526-.213-1.041-.585-1.413a2.013 2.013 0 00-1.415-.587M93.165 140.263c-.527 0-1.043.214-1.415.586a2.015 2.015 0 00-.585 1.414c0 .527.213 1.042.585 1.414a2.01 2.01 0 001.415.586c.527 0 1.041-.213 1.415-.586.372-.372.585-.887.585-1.414 0-.526-.213-1.042-.585-1.414a2.017 2.017 0 00-1.415-.586M80.918 139.095a2.13 2.13 0 10-1.1 4.116 2.13 2.13 0 001.1-4.116zm-11.432-4.738a2.132 2.132 0 00-2.911.778 2.132 2.132 0 003.69 2.133 2.131 2.131 0 00-.78-2.911zm-9.82-7.538a2.13 2.13 0 10-3.014 3.012 2.13 2.13 0 003.014-3.012zm-7.546-9.812a2.132 2.132 0 10-3.688 2.138 2.132 2.132 0 003.688-2.138zm-4.745-11.425a2.133 2.133 0 00-2.612-1.507 2.13 2.13 0 101.104 4.116 2.131 2.131 0 001.508-2.61zm-1.613-12.27a2.13 2.13 0 10-4.262.003c0 1.177.955 2.13 2.133 2.128a2.13 2.13 0 002.13-2.132zm1.593-12.273a2.131 2.131 0 10-4.12-1.093 2.131 2.131 0 004.12 1.093zm4.727-11.433a2.13 2.13 0 10-3.693-2.13 2.13 2.13 0 103.693 2.13zm7.531-9.825a2.13 2.13 0 10-3.018-3.009 2.13 2.13 0 003.018 3.009zm9.807-7.553a2.13 2.13 0 10-2.139-3.685 2.13 2.13 0 002.14 3.685zm11.424-4.756a2.13 2.13 0 10-1.105-4.115 2.13 2.13 0 001.105 4.115zM92.6 41.285c-.526 0-1.042.214-1.414.586a2.015 2.015 0 00-.586 1.414c0 .527.214 1.042.586 1.414a2.01 2.01 0 001.414.586c.527 0 1.042-.213 1.415-.586.372-.372.585-.887.585-1.414 0-.526-.213-1.042-.585-1.414a2.017 2.017 0 00-1.415-.586M92.825 119.675c-.526 0-1.042.213-1.414.585a2.017 2.017 0 00-.586 1.415c0 .527.214 1.041.586 1.415.372.372.888.585 1.414.585.527 0 1.042-.213 1.415-.585.372-.374.585-.888.585-1.415s-.213-1.041-.585-1.415a2.017 2.017 0 00-1.415-.585M83.508 118.415a2.133 2.133 0 00-2.733 1.272 2.129 2.129 0 001.273 2.731 2.131 2.131 0 101.46-4.004zm-8.118-4.693a2.132 2.132 0 10-2.742 3.263 2.132 2.132 0 002.742-3.263zm-6.034-7.177a2.133 2.133 0 00-2.913-.777 2.131 2.131 0 102.913.777zm-3.209-8.802a2.133 2.133 0 00-4.2.738 2.132 2.132 0 004.2-.738zm-.004-9.376a2.13 2.13 0 00-1.734-2.464 2.13 2.13 0 10-.733 4.197 2.131 2.131 0 002.467-1.733zm3.198-8.802a2.131 2.131 0 10-3.693-2.13 2.131 2.131 0 003.693 2.13zm6.027-7.187a2.132 2.132 0 10-3.004-.257 2.132 2.132 0 003.004.257zm8.11-4.699a2.13 2.13 0 10-1.464-4.002 2.13 2.13 0 101.464 4.002zM92.94 61.874a2.01 2.01 0 00-1.415.586 2.012 2.012 0 00-.585 1.414c0 .526.213 1.042.585 1.414.372.372.888.586 1.415.586s1.041-.214 1.415-.586c.372-.372.585-.888.585-1.414 0-.527-.213-1.042-.585-1.414a2.013 2.013 0 00-1.415-.586" />
                                    </g>
                                </svg>
                            </div>
                            <div className="flex justify-center flex-col items-center text-indigo-700 dark:text-indigo-600">
                                <img aria-label="Home" className="w-48 h-18" id="logo" enableBackground="new 0 0 300 300" src={logo} alt="Coffee" />
                            </div>
                            <ul className="mt-20">
                                <li className="flex items-center sm:mb-16 mb-12 cursor-pointer">
                                    <div className="h-8 flex items-center justify-center border-indigo-700 dark:border-indigo-600 font-bold bg-indigo-700 w-8 rounded-full border shadow text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="text-indigo-700 dark:text-indigo-600 text-lg font-normal ml-4">About</p>
                                </li>
                                <li className="flex items-center sm:mb-16 mb-12 cursor-pointer">
                                    <div className="h-8 flex items-center justify-center border-indigo-700 dark:border-indigo-600 font-bold text-indigo-700 dark:text-indigo-600 w-8 rounded-full border">2</div>
                                    <p className="text-gray-800 dark:text-gray-100 text-lg font-normal ml-4">Projects &amp; skills</p>
                                </li>
                                <li className="flex items-center sm:mb-16 mb-12 cursor-pointer">
                                    <div className="h-8 flex items-center justify-center border-indigo-700 dark:border-indigo-600 font-bold text-indigo-700 dark:text-indigo-600 w-8 rounded-full border">3</div>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg font-normal ml-4">Achievements</p>
                                </li>
                                <li className="flex items-center cursor-pointer">
                                    <div className="h-8 flex items-center justify-center border-indigo-700 dark:border-indigo-600 font-bold text-indigo-700 dark:text-indigo-600 w-8 rounded-full border">4</div>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg font-normal ml-4">Preferences</p>
                                </li>
                            </ul>
                        </div>
                        <div className="xl:w-4/5 w-full lg:w-4/5 flex flex-col">
                            <div className="xl:w-full pb-8 pt-10 justify-start">
                                <div className="flex items-center w-11/12 mx-auto">
                                    <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Profile</p>
                                    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-11/12 mx-auto justify-end flex-grow">
                                <div className="mx-auto xl:mx-0">
                                    <div className="rounded relative h-48">
                                        <img src="https://cdn.tuk.dev/assets/photo-1472289065668-ce650ac443d2.jfif" alt className="w-full h-full object-cover overflow-hidden rounded absolute shadow" />
                                        <div className="flex bg-white dark:bg-gray-800 items-center px-3 py-2 shadow rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                                            <p className="text-xs text-gray-600 dark:text-gray-400">Change Cover Photo</p>
                                            <div className="ml-2 text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                    <line x1={16} y1={5} x2={19} y2={8} />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-48 h-48 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/form_layouts/fl_2.png" alt className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow" />
                                            <div className="bg-white dark:bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center right-0 absolute cursor-pointer text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                    <line x1={16} y1={5} x2={19} y2={8} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-16 flex flex-row xl:w-3/6 lg:w-3/6">
                                        <div className="flex flex-col mr-8">
                                            <label htmlFor="firstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                First name
                                            </label>
                                            <input type="text" name="firstName" required id="firstName" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not John" />
                                        </div>
                                        <div className="flex flex-col mr-20">
                                            <label htmlFor="lastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Last name
                                            </label>
                                            <input type="text" name="lastName" required id="lastName" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                                        </div>
                                        <div className="flex flex-col mr-8">
                                            <label htmlFor="city" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                City
                                            </label>
                                            <input type="text" name="city" required id="city" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                                        </div>
                                        <div className="flex flex-col mr-16">
                                            <label htmlFor="country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Country
                                            </label>
                                            <input type="text" name="country" required id="country" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                                        </div>
                                        <div className="flex flex-col w-2/6">
                                            <label htmlFor="country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                High school
                                            </label>
                                            <input type="text" name="country" required id="country" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                                        </div>
                                    </div>
                                    <div className="mt-12 flex flex-row xl:w-4/6 lg:w-4/6">
                                        <div className="flex flex-col w-2/6 mr-8">
                                            <label htmlFor="github" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Github
                                            </label>
                                            <input type="url" name="github" required id="github" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                                        </div>                                    
                                        <div className="flex flex-col w-2/6 mr-8">
                                            <label htmlFor="linkedin" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                LinkedIn/Social media
                                            </label>
                                            <input type="url" name="linkedin" required id="likedin" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                                        </div>
                                        <div className="flex flex-col w-2/6 mr-8">
                                            <label htmlFor="github" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Personal website
                                            </label>
                                            <input type="url" name="github" required id="github" className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                                        </div>
                                    </div>
                                    <div className="mt-8 flex flex-col xl:w-4/6 lg:w-w-4/6 pr-8">
                                        <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            About
                                        </label>
                                        <textarea id="about" name="about" required className="border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 dark:text-gray-100 resize-none" placeholder="Let the world know who you are" rows={5} defaultValue={""} />
                                        <p className="w-full text-right text-xs text-gray-500 pt-1">Character Limit: 200</p>
                                    </div>
                                    <div className="mt-4 flex flex-col xl:w-4/6 lg:w-w-4/6 pr-8">
                                        <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                            Tagline
                                        </label>
                                        <textarea id="about" name="about" required className="border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 dark:text-gray-100 resize-none" placeholder="Hacker, dreamer, maker..." rows={2} defaultValue={""} />
                                        <p className="w-full text-right text-xs text-gray-500 pt-1">Character Limit: 200</p>
                                    </div>
                                    <div className="rounded w-auto inline-block">
                                        <p className="text-gray-800 dark:bg-gray-800 bg-white dark:border-gray-300 rounded-lg border border-gray-300 shadow mb-6 py-2 px-2 border text-sm">Java sdfsd</p>
                                        {/* <div className="flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-2 px-2">
                                            
                                        </div> */}
                                        <svg id="icon-cancel-circle" viewBox="0 0 32 32">
<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
<path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
</svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full py-4 sm:px-8 px-5 bg-gray-100 dark:bg-gray-700 flex justify-end">
                                <div className="btn text-sm focus:outline-none text-indigo-600 dark:text-gray-400 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out">Complete Later &#62;</div>
                                <button className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out">Back</button>
                                <button className="btn text-sm focus:outline-none text-white bg-indigo-700 py-2 px-8 rounded transition duration-150 ease-in-out hover:bg-indigo-600" type="submit">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default InternOnboarding;