import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import {db} from "@/src";
import {headers} from "next/headers";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    pages:{
      signIn:"/sign-in"
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
});

export const getSession = async ()=>auth.api.getSession({
    headers:await headers(),
});