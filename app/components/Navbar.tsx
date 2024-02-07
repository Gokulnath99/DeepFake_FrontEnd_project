"use client"

import * as React from "react"
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import Link from "next/link"
import { cn } from "../lib/utils"
import Logo from "./Logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

// import { ArrowRight } from "lucide-react"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function NavigationMenuDemo() {
  // const { getUser } = getKindeServerSession()
  // const user = getUser()

  return (
    <nav className='sticky h-20 inset-x-0 top-0 z-30 w-full backdrop-blur-sm bg-white/30 transition-all'>
      <MaxWidthWrapper>
        <div className="hidden sm:flex justify-around">
          <Link href='/'>
            <Logo />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/dfaudio" title="DeepFake Audio detection">
                      AI-powered identification of manipulated voice recordings.
                    </ListItem>
                    <ListItem href="/dfimage" title="DeepFake image detection">
                      AI-Enhanced Recognition of Altered Images
                    </ListItem>
                    <ListItem href="/dfvideo" title="DeepFake video detection">
                      Advanced AI for Real-Time Deepfake Video Detection
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Research</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <LoginLink 
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}
              >
              Sign in
            </LoginLink>
            <RegisterLink
              className={buttonVariants({
                size: 'sm',
              })}
            >
              Sign up
            </RegisterLink>
          </div>
        </div>
        <div className="sm:hidden">
          <p>=</p>
        </div>
      </MaxWidthWrapper>
    </nav>
    
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
