import React, { useRef, useState } from "react";

// assets
import logo from "../../assets/images/logo.png";
import Alert from "../../components/Alert/Alert";

// models 
import { createNewUser } from "../../firebase/database/user";
import { validatePassword, validateEmail } from "../../utils";

// util
const util = require('util')

// models

const Signup = () => {
    let form = useRef(null);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        console.log("payload", payload)

        let isValidEmailError = validateEmail(payload.email)
        let isValidPasswordError = validatePassword(payload.password, payload.confirmPassword)
        if (isValidEmailError != null) {
            console.log("[Signup.js] email is weirdly formatted.")
            setError(isValidEmailError)
        } else if (isValidPasswordError != null) {
            console.log("[Signup.js] Passwords are bad.")
            setError(isValidPasswordError)
        } else {
            createNewUser(payload.email, payload.password, payload.type).then(() => {
                console.log("[Signup.js] Signing up user is successful")
            }).catch((err) => {
                console.log("[Signup.js] Error occurred while signing up user: " + err)
                setError("An unexpected error occurred. Please try again later.")
            })
        }
    }

    return (
        <section className="bg-white {-- h-screen --}">
            {error ? <Alert header="Sign up error" message={error} dismiss={() => setError(null)}/> : ""}
            <div className="mx-auto flex justify-center flex-col lg:flex-row h-full">
                <form onSubmit={handleSubmit} ref={form} className="w-full lg:w-1/2 flex justify-center bg-gray-100 dark:bg-gray-900">
                    <div className="w-full sm:w-4/6 md:w-4/6 xl:w-2/3 text-gray-800 dark:text-gray-100 mb-12 sm:mb-0 px-2 sm:px-0">
                        <div className="sm:py-20 px-2 flex flex-col items-center justify-center mt-8 sm:mt-0">
                            <img aria-label="Home" className="w-48 h-18" id="logo" enableBackground="new 0 0 300 300" src={logo} alt="Coffee" />
                        </div>
                        <div className="pt-10 px-2 flex flex-col items-center justify-center">
                            <h3 className="text-2xl md:text-3xl sm:text-4xl font-bold leading-tight">Welcome! Sign Up For An Account</h3>
                        </div>
                        <div className="mt-12 w-full px-2 sm:px-6">
                            <div className="flex flex-col mt-5">
                                <label htmlFor="email" className="text-lg font-semibold leading-tight">
                                    Email
                                </label>
                                <input required id="email" name="email" className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow" type="email" />
                            </div>
                            <div className="flex flex-col mt-5">
                                <label htmlFor="password" className="text-lg font-semibold fleading-tight">
                                    Password
                                </label>
                                <input required id="password" name="password" className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 focus:border-indigo-700 border-gray-300 border shadow" type="password" />
                            </div>
                            <div className="flex flex-col mt-5">
                                <label htmlFor="confirmPassword" className="text-lg font-semibold fleading-tight">
                                    Confirm Password
                                </label>
                                <input required id="confirmPassword" name="confirmPassword" className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 focus:border-indigo-700 border-gray-300 border shadow" type="password" />
                            </div>
                            <div className="flex flex-col mt-5">
                                <label htmlFor="confirmPassword" className="text-lg font-semibold fleading-tight">
                                    I'm a...
                                </label>
                                <div className="flex">
                                    <div className="py-4 flex">
                                        <div className="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input defaultChecked type="radio" name="type" value="intern" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                            <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                                        </div>
                                        <p className="ml-1 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">High schooler</p>
                                    </div>
                                    <div className="py-4 flex ml-6">
                                        <div className="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="radio" name="type" value="startup" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                            <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                                        </div>
                                        <p className="ml-1 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Startup</p>
                                    </div>
                                    <style>
                                        {`.checkbox:checked {
                                                border: none;
                                            }
                                            .checkbox:checked + .check-icon {
                                                display: flex;
                                            }`}
                                    </style>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 sm:mb-16 sm:px-6">
                            <button type="submit" className="focus:outline-none w-full sm:w-auto bg-yellow-500 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6">
                                Get started
                            </button>
                            <p className="mt-12 sm:mt-32 text-xs text-center">
                                Already Have An Account?{" "}
                                <a className="underline text-indigo-600" href="/signin">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </form>

                <div className="w-full lg:w-1/2 bg-indigo-400 px-2 py-12 sm:p-12 flex flex-col relative">
                    <div className="flex-1 flex flex-col justify-center">
                        <div>
                            <img src="https://dh-ui.s3.amazonaws.com/assets/team.png"/>
                        </div>
                    </div>
                    {/* <div className="flex flex-col sm:flex-row rounded bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 mt-10 lg:mt-0">
                        <div className="py-12 flex items-center sm:border-r dark:border-gray-700 w-full sm:w-1/6 justify-center text-indigo-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="16 4 20 4 20 8" />
                                <line x1={14} y1={10} x2={20} y2={4} />
                                <polyline points="8 20 4 20 4 16" />
                                <line x1={4} y1={20} x2={10} y2={14} />
                                <polyline points="16 20 20 20 20 16" />
                                <line x1={14} y1={14} x2={20} y2={20} />
                                <polyline points="8 4 4 4 4 8" />
                                <line x1={4} y1={4} x2={10} y2={10} />
                            </svg>
                        </div>
                        <div className="pl-4 pb-12 sm:py-6 pr-6 sm:w-5/6">
                            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100 leading-normal">Hassle Free Team Augmentation Like Never Before.</h3>
                            <p className="text-sm pt-2 text-gray-700 dark:text-gray-400  leading-normal">Staff augmentation is quickly becoming a buzzword on the IT job market, attracting more global businesses to hire remotely.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};
export default Signup;