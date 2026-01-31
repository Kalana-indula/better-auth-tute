'use client'

import React from 'react'
import {redirect, useRouter} from "next/navigation";
import {getSession} from "@/src/lib/auth";

const Page = async () => {

    const session = await getSession();

    if(session) redirect("/home");

    const router = useRouter();

    const navigateToSignIn= ()=>{
        router.push("/sign-in");
    }

    return (
        <>
            <div>
                <button onClick={navigateToSignIn} className="p-5 border-black border-2 m-3 rounded-md hover:cursor-pointer">Sign In</button>
            </div>
        </>
    )
}
export default Page
