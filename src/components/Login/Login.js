import React from 'react';
import { Home } from '../Home/Home';

export const Login = () => {
    return (

        <div>
            {localStorage.getItem("isUserAuthenticated") === "true" ? <Home /> :
                <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
                    <h2 className="text-3xl font-bold text-center">Sign in to TClone</h2>

                    <input
                        type="text"
                        placeholder="Email"
                        className="text-xl py-2 rounded-full px-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="text-xl py-2 rounded-full px-4"
                    />

                    <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white">
                        Log in
                    </button>

                    <p className="text-center text-xl">Don't have an account?</p>

                    <input
                        type="text"
                        placeholder="Email"
                        className="text-xl py-2 rounded-full px-4"
                    />

                    <input
                        type="text"
                        placeholder="First Name"
                        className="text-xl py-2 rounded-full px-4"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="text-xl py-2 rounded-full px-4"
                    />
                    <input
                        type="email"
                        placeholder="email"
                        required
                        className="text-xl py-2 rounded-full px-4"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="text-xl py-2 rounded-full px-4"
                    />

                    <button
                        className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            }
        </div>
    );
}
