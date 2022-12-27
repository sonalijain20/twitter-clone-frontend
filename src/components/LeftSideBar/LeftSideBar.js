import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";

export const LeftSideBar = () => {
    return (

        <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
            <div className="mt-6 flex flex-col space-y-4">
                <Link to="/">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <HomeIcon fontSize="large" />
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/feed">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <TagIcon fontSize="large" />
                        <p>Feed</p>
                    </div>
                </Link>
                <Link to="/profile/">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <PersonIcon fontSize="large" />
                        <p>Profile</p>
                    </div>
                </Link>
            </div>

        </div>
    );
}
