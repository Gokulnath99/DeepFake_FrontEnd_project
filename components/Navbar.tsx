"use client";

import Link from "next/link";
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
    <nav className="sticky py-3 inset-x-0 top-0 z-30 transition-all px-6 drop-shadow-lg">
      <div className="hidden md:flex flex-row items-center">
        <Link className="basis-1/2 items-center" href="/">
          <Logo />
        </Link>
        <NavMenu />

        <div className="grid grid-flow-col gap-4 mx-5">
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
