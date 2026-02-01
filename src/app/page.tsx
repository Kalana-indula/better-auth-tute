import React from 'react'
import {redirect} from "next/navigation";
import {getSession} from "@/src/lib/auth";
import Link from "next/dist/client/link";

const Page = async () => {

    const session = await getSession();

    if(session) redirect("/home");


    return (
        <>
            <div>
                <Link href="/sign-in">Sign In</Link>
            </div>
        </>
    )
}
export default Page
