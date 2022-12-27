import React from 'react';
import { Home } from '../Home/Home';
import { useCallback, useState } from "react";
import { MakeAPICall } from '../../utils/apiCall';


export const Register = () => {


    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const handleLastNameChange = useCallback((e) => {
        setLastName(e.target.value);
    }, []);

    const handleFirstNameChange = useCallback((e) => {
        setFirstName(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const register = useCallback(async () => {
        console.log('Signing up');
        const data = {
            email,
            firstName,
            lastName,
            password
        };
        const apiResponse = await MakeAPICall('/api/authenticate/register', 'POST', data);
        if (apiResponse.status === 201) {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            alert('Something went wrong');
        }
        console.log(apiResponse);
    }, [email, firstName, lastName, password]);

    return (

        <div>
            {localStorage.getItem("isUserAuthenticated") === "true" ? <Home /> :
                <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
                    <p className="text-center text-xl">Don't have an account?</p>

                    <input
                        type="email"
                        placeholder="email"
                        required
                        className="text-xl py-2 rounded-full px-4"
                        onChange={(e) => { handleEmailChange(e) }}
                    />

                    <input
                        type="text"
                        placeholder="First Name"
                        className="text-xl py-2 rounded-full px-4"
                        onChange={(e) => { handleFirstNameChange(e) }}
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="text-xl py-2 rounded-full px-4"
                        onChange={(e) => { handleLastNameChange(e) }}

                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="text-xl py-2 rounded-full px-4"
                        onChange={(e) => { handlePasswordChange(e) }}

                    />

                    <button
                        className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
                        type="submit"
                        onClick={register}
                    >
                        Register
                    </button>
                </form>
            }
        </div>
    )
}
