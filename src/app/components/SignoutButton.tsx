'use client'

import React from 'react'
import {useRouter} from "next/navigation";
import {authClient} from "@/src/lib/auth-client";

const SignoutButton = () => {

    const router = useRouter();

    const signout = async ()=>await authClient.signOut({
        fetchOptions:{
            onSuccess:()=>router.push("/sign-in"),
        },
    })

    return (
        <>
            <button onClick={signout}>Sign out</button>
        </>
    )
}
export default SignoutButton
