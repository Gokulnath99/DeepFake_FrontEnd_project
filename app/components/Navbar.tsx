import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle"
import Logo from "./Logo"
import { buttonVariants } from './ui/button'
import NavMenu  from "../components/NavigationMenu";
import { SignInButton, SignUpButton, SignedOut, UserButton } from "@clerk/nextjs";
import { cn } from "../lib/utils";


export default async function Navbar() {

  return (
      <nav className="sticky h-24 inset-x-0 top-0 z-30 backdrop-blur-sm transition-all">
        <div className="hidden md:flex justify-between">
          <Link className='flex items-center' href='/'>
            <Logo />
          </Link>

          <NavMenu />

          <div className="flex items-center gap-x-5">
            <DarkModeToggle />

            <UserButton afterSignOutUrl="/" />

            <SignedOut>
              <div className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
              </div>
              <div className={buttonVariants({
                    variant: 'secondary',
                    size: 'sm',
                  })}>
                <SignUpButton afterSignUpUrl="/dashboard"/>
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