import React, { useState } from "react";

const ProfileScreen = (props) => {
    const [profileData, setProfileData] = useState({})

    const onFieldChange = (event) => {
        event.preventDefault();
        let currentProfileData = profileData
        currentProfileData[event.target.id] = event.target.value
        setProfileData(currentProfileData)
        if (props.getData) {
            props.getData(profileData)
        }
    }

    return (
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
            <div className="w-11/12 mx-auto justify-end">
                <div className="mx-auto xl:mx-0">
                    <div className="rounded relative h-48">
                        <img src="https://cdn.tuk.dev/assets/photo-1472289065668-ce650ac443d2.jfif" className="w-full h-full object-cover overflow-hidden rounded absolute shadow" />
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
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/form_layouts/fl_2.png" className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow" />
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
                                First name<sup className="text-red-400">*</sup>
                            </label>
                            <input type="text" name="firstName" required id="firstName" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not John" />
                        </div>
                        <div className="flex flex-col mr-20">
                            <label htmlFor="lastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                Last name<sup className="text-red-400">*</sup>
                            </label>
                            <input type="text" name="lastName" required id="lastName" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                        </div>
                        <div className="flex flex-col mr-8">
                            <label htmlFor="city" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                City<sup className="text-red-400">*</sup>
                            </label>
                            <input type="text" name="city" required id="city" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                        </div>
                        <div className="flex flex-col mr-16">
                            <label htmlFor="country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                Country<sup className="text-red-400">*</sup>
                            </label>
                            <input type="text" name="country" required id="country" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                        </div>
                    </div>
                    <div className="mt-12 flex flex-row xl:w-4/6 lg:w-4/6">
                        <div className="flex flex-col w-2/6 mr-8">
                            <label htmlFor="github" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                Github
                            </label>
                            <input type="url" name="github" required id="github" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                        </div>                                    
                        <div className="flex flex-col w-2/6 mr-8">
                            <label htmlFor="linkedin" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                LinkedIn/Social media
                            </label>
                            <input type="url" name="linkedin" required id="likedin" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                        </div>
                        <div className="flex flex-col w-2/6 mr-8">
                            <label htmlFor="personalWebsite" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                Personal website
                            </label>
                            <input type="url" name="personalWebsite" required id="personalWebsite" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                        </div>
                    </div>
                    <div className="mt-12 flex flex-row xl:w-4/6 lg:w-4/6">
                        <div className="flex flex-col w-3/6 mr-8">
                            <label htmlFor="highSchool" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                High school<sup className="text-red-400">*</sup>
                            </label>
                            <input type="url" name="highSchool" required id="highSchool" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                        </div>                                    
                        <div className="flex flex-col w-3/6 mr-8">
                            <label htmlFor="incomingAt" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                Incoming at
                            </label>
                            <input type="url" name="incomingAt" required id="incomingAt" onChange={onFieldChange} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="Not Doe" />
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col xl:w-4/6 lg:w-w-4/6 pr-8">
                        <label htmlFor="tagline" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                            Tagline<sup className="text-red-400">*</sup>
                        </label>
                        <textarea id="tagline" name="tagline" required onChange={onFieldChange} className="border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 dark:text-gray-100 resize-none" placeholder="Hacker, dreamer, maker..." rows={2} defaultValue={""} />
                        {/* <p className="w-full text-right text-xs text-gray-500 pt-1">Character Limit: 200</p> */}
                    </div>
                    <div className="mt-12 flex flex-col xl:w-4/6 lg:w-w-4/6 pr-8 pb-8">
                        <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                            About<sup className="text-red-400">*</sup>
                        </label>
                        <textarea id="about" name="about" required onChange={onFieldChange} className="border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent dark:border-gray-700 dark:hover:border-indigo-600 dark:text-gray-100 resize-none" placeholder="Let the world know who you are" rows={5} defaultValue={""} />
                        {/* <p className="w-full text-right text-xs text-gray-500 pt-1">Character Limit: 200</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;