import React from 'react'

export const Tweet = () => {
    return (
        <form className="border-b-2 pb-6">
            <p className="font-bold pl-2 my-2">Username</p>
            <p className="pl-2 my-2">Posted on : Username</p>

            <textarea
                type="text"
                placeholder="What's on your mind today?"
                maxlength={280}
                className="bg-slate-200 rounded-lg w-full p-2"
            ></textarea>
        </form>

    )
}
