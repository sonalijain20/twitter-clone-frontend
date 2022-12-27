import React from 'react';
import { Home } from '../Home/Home';
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { Link } from 'react-router-dom';
import { MakeAPICall } from '../../utils/apiCall';



export const Login = () => {

    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const login = useCallback(
        async () => {
            console.log("Logging in")
            const data = { email, password }
            const apiResponse = await MakeAPICall('/api/authenticate/login', 'POST', data);
            if (apiResponse.status === 200) {
                console.log({ apiResponse })
                localStorage.setItem('accessToken', apiResponse.data.data.access_token);
                localStorage.setItem('user', JSON.stringify(apiResponse.data.data.user));
                localStorage.setItem('isUserAuthenticated', true);
                setTimeout(() => {
                    Navigate('/');
                }, 3000);
            } else if (apiResponse.status === 401) {
                alert(apiResponse.message);
            } else {
                alert('Something went wrong');
            }

        },
        [email, password]
    )

    return (
        <div>
            {
                localStorage.getItem("isUserAuthenticated") === "true" ? <Home /> :
                    <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
                        <h2 className="text-3xl font-bold text-center">Sign in to TClone</h2>

                        <input
                            type="email"
                            placeholder="Email"
                            className="text-xl py-2 rounded-full px-4"
                            onChange={(e) => { handleEmailChange(e) }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="text-xl py-2 rounded-full px-4"
                            onChange={(e) => { handlePasswordChange(e) }}
                        />

                        <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white" onClick={login}>
                            Log in
                        </button>

                        <Link
                            to="/register"
                            className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white text-center"
                        >
                            Register
                        </Link>
                        <p className='text-center'>Dont have an account?</p>
                    </form >
            }
        </div>
    );
}





