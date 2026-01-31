import React from "react";

const SignUpCard = () => {
    return (
        <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-zinc-900">Create an account</h1>
                <p className="mt-1 text-sm text-zinc-600">
                    Sign up with your email and password.
                </p>
            </div>

            <form className="space-y-4">
                {/* Email */}
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-900">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
                        required
                    />
                </div>

                {/* Password */}
                <div className="space-y-1">
                    <label htmlFor="password" className="text-sm font-medium text-zinc-900">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
                        required
                    />
                    <p className="text-xs text-zinc-500">Use at least 8 characters.</p>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1">
                    <label
                        htmlFor="confirmPassword"
                        className="text-sm font-medium text-zinc-900"
                    >
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 active:bg-zinc-950"
                >
                    Create account
                </button>

                <p className="text-center text-xs text-zinc-500">
                    By signing up, you agree to our{" "}
                    <a href="#" className="underline underline-offset-4 hover:text-zinc-700">
                        Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline underline-offset-4 hover:text-zinc-700">
                        Privacy Policy
                    </a>
                    .
                </p>
            </form>
        </div>
    );
};

export default SignUpCard;
