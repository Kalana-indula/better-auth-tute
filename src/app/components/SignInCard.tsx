"use client"

import React from "react";

const SignInCard = () => {
    return (
        <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-zinc-900">Welcome back</h1>
                <p className="mt-1 text-sm text-zinc-600">Sign in with your GitHub account.</p>
            </div>

            <form className="space-y-4">
                <button
                    type="button"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 active:bg-zinc-100"
                    onClick={() => {
                        // Replace this with your auth call, e.g.:
                        // signIn("github")
                        // or router.push("/api/auth/signin/github")
                    }}
                >
                    Continue with GitHub
                </button>

                <p className="text-center text-xs text-zinc-500">
                    Don&apos;t have an account?{" "}
                    <a href="/sign-up" className="underline underline-offset-4 hover:text-zinc-700">
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default SignInCard;
