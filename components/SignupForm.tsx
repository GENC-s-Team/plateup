'use client'

import { loginAction, signupAction } from "@/app/(auth)/actions/actions";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

export default function SignUpForm() {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordMatch, setPasswordMatch] = useState<boolean>(true);

    const settingPrimaryPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordMatch(newPassword === confirmPassword); // Check match
    };

    const settingConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordMatch(password === newConfirmPassword); // Check match
    };

    return (
        <div className="h-screen">
            <div className="min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8">
                <div className="bg-white shadow-md sm:mx-auto sm:w-full sm:max-w-md px-8 pb-10 pt-4">
                    <img src="/imgs/plateup_logo_symbol.webp" className="mx-auto mb-2" loading="lazy" width="100" height="100" decoding="async" />
                    <h2 className="text-3xl text-center font-extrabold pb-10">Sign up to Plateup</h2>
                    <form className="flex flex-col justify-center gap-6">
                        <div className="flex flex-col">
                            <label className="text-md font-normal pb-1" htmlFor="email">Email</label>
                            <input
                                className="w-full rounded-md ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black py-2.5 px-3"
                                id="email" name="email" type="email" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={settingPrimaryPassword}
                                className="w-full rounded-md ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black py-2.5 px-3"
                                id="password" name="password" type="password" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                onChange={settingConfirmPassword}
                                className="w-full rounded-md ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black py-2.5 px-3"
                                id="confirm-password" name="confirmPassword" type="password" required />
                        </div>
                        {!passwordMatch && (
                            <p className="text-red-500 text-sm">Passwords do not match.</p>
                        )}
                        <div className="flex flex-col items-center">
                            <button
                                className="w-full bg-secondary hover:bg-accent text-white font-bold transition duration-200 ease-in-out py-2 px-4 rounded"
                                formAction={signupAction}
                                disabled={!passwordMatch} // Disable if passwords don't match
                            >
                                Create Account
                            </button>
                            <span className="text-sm font-normal pt-10">
                                Have an existing account? <Link className="text-sm font-bold text-gradient text-gradient-solid" href="/login">Login here</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
