import React from 'react'
import SignoutButton from "@/src/app/components/SignoutButton";
import {getSession} from "@/src/lib/auth";
import {redirect} from "next/navigation";

const Home = async () => {

    const session = await getSession();

    if(!session) redirect("/sign-in");

    return (
        <>
            <div>This is home page</div>
            <SignoutButton />
        </>
    )
}
export default Home
