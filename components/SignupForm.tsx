import {signupAction } from "@/app/(auth)/actions/actions";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={signupAction}>create an account</button>
      <Link href="/login">login</Link>
    </form>
  );
}
