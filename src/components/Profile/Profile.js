import React from 'react';
import { LeftSideBar } from '../LeftSideBar/LeftSideBar';
import { RightSideBar } from '../RightSideBar/RightSideBar';
import { Navbar } from '../Navbar/Navbar';

export const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="px-6">
                    <LeftSideBar />
                </div>
                <div className="col-span-2 border-x-2 border-t-slate-800 px-6">

                </div>

                <div className="px-6">
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
}
