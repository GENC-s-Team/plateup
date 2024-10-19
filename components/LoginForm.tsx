import { loginAction } from "@/app/(auth)/actions/actions";
import Link from "next/link";
import plateup_logo from "../public/imgs/plateup_logo.webp"

export default function LoginForm() {
  return (
      <div className="h-screen">
          <div className="min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8">
              <div className="bg-white shadow-md sm:mx-auto sm:w-full sm:max-w-md px-8 pb-10 pt-4">
                  <img src="/imgs/plateup_logo_symbol.webp" className="mx-auto mb-2" loading="lazy" width="100" height="100" decoding="async"/>
                  <h2 className="text-3xl text-center font-extrabold pb-10">Log in to Plateup</h2>
                  <form className="flex flex-col justify-center gap-6">
                    <div className="flex flex-col">
                      <label className="text-md font-normal pb-1" htmlFor="email">Email</label>
                      <input className="w-full rounded-md ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black py-2.5 px-3" id="email" name="email" type="email" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input className="w-full rounded-md ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black py-2.5 px-3" id="password" name="password" type="password" required />
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <button className="w-full bg-secondary hover:bg-accent text-white font-bold transition duration-200 ease-in-out py-2 px-4 rounded" formAction={loginAction}>Log in</button>
                        <span className="text-sm font-normal">New to Plateup? <Link className="text-sm font-bold text-gradient text-gradient-solid" href="/signup">Create Account</Link></span>
                    </div>
                  </form>
              </div>
          </div>
      </div>
  );
}
