import React from 'react';
import { Link } from "react-router-dom";


export const RightSideBar = () => {
    return (
        <div className="flex justify-between">
            <div>
                <p className="font-bold">Username</p>
                <p className="font-bold">@Username</p>
            </div>
            <div>
                <Link to="login">
                    <button className="bg-red-500 px-4 py-2 text-white rounded-full">
                        Logout
                    </button>
                </Link>
            </div>
        </div>)
}
