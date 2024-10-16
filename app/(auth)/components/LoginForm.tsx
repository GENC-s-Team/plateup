import { loginAction } from "@/app/(auth)/actions/actions";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={loginAction}>Log in</button>
      <Link href="/signup">Sign Up</Link>
    </form>
  );
}
