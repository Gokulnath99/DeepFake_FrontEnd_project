import Link from "next/link";
// import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";
import NavMenu from "../components/NavigationMenu";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default async function Navbar() {
  return (
    <nav className="sticky h-24 inset-x-0 top-0 z-30 transition-all bg-white dark:bg-[#0C0A09]">
      <div className="hidden md:flex justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <NavMenu />

        <div className="flex items-center gap-x-5">

          <UserButton afterSignOutUrl="/" />

          <SignedOut>
            <div
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <SignInButton afterSignInUrl="/" mode="modal" />
            </div>
            <div
              className={buttonVariants({
                variant: "secondary",
                size: "sm",
              })}
            >
              <SignUpButton afterSignUpUrl="/" />
            </div>
          </SignedOut>
        </div>
      </div>
      <div className="md:hidden">
        <p>=</p>
      </div>
    </nav>
  );
}
