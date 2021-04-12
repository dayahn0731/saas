import React, {useRef, useState} from "react";

// assets
import logo from "../../assets/images/logo.png";
import Alert from "../../components/Alert/Alert";
import { signInUser } from "../../firebase/database/user";

const Signin = () => {
    let form = useRef(null);
    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        console.log("payload", payload);
        // Place your API call here to submit your payload.

        signInUser(payload.email, payload.password).then(() => {
            console.log("[Signin.js] Successfully signed in user.")
        }).catch((error) => {
            console.log("[Signin.js] Error signing in user")
            setError("An unexpected error occurred. Please try again later.")
        })
    };

    return (
        <section className="bg-white {-- h-screen --}">
            <div className="mx-auto flex justify-center flex-col lg:flex-row h-full">
                {error ? <Alert header="Sign in error" message={error} dismiss={() => {setError(null)}} /> : ""}
                <form onSubmit={handleSubmit} ref={form} className="w-full lg:w-1/2 flex justify-center bg-gray-100 dark:bg-gray-900">
                    <div className="w-full sm:w-4/6 md:w-4/6 xl:w-2/3 text-gray-800 dark:text-gray-100 mb-12 sm:mb-0 px-2 sm:px-0">
                        <div className="sm:py-20 px-2 flex flex-col items-center justify-center mt-8 sm:mt-0">
                            <img aria-label="Home" className="w-48 h-18" id="logo" enableBackground="new 0 0 300 300" src={logo} alt="Coffee" />
                        </div>
                        <div className="pt-10 px-2 flex flex-col items-center justify-center">
                            <h3 className="text-2xl md:text-3xl sm:text-4xl font-bold leading-tight">Login To Your Account</h3>
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
                        </div>
                        <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
                            <div/>
                            <a className="text-xs text-indigo-600" href="javascript: void(0)">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="px-2 sm:mb-16 sm:px-6">
                            <button type="submit" className="focus:outline-none w-full sm:w-auto bg-yellow-500 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6">
                                Login to Your Account
                            </button>
                            <p className="mt-12 sm:mt-32 text-xs text-center">
                                Don’t Have An Account?{" "}
                                <a className="underline text-indigo-600" href="/signup">
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>
                </form>

                <div className="w-full lg:w-1/2 bg-indigo-400 px-2 py-12 sm:p-12 flex flex-col relative">
                    <div className="flex-1 flex flex-col justify-center">
                        <div>
                            <img src="https://dh-ui.s3.amazonaws.com/assets/team.png" alt />
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
export default Signin;