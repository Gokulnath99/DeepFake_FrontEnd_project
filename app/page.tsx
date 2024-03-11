// Importing necessary React library
import React from "react";

// Importing custom components and utilities
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from "next/link"; // Link component from Next.js for client-side transitions
import { ArrowRight } from "lucide-react"; // Icon component from 'lucide-react' library
import { buttonVariants } from "@/components/ui/button"; // Utility for button styling
import Image from "next/image";
import Carousel from "../components/Carousel";
import { MovingCard } from "@/components/MovingCard";

// HomePage functional component definition
export default function HomePage() {
  return (
    <>
      {/* MaxWidthWrapper component to control the maximum width of the content */}
      <MaxWidthWrapper className="mb-12 sm:mt-20 flex flex-col items-center justify-center text-center">
        {/* Hero section starts */}
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-300 bg-white px-7 py-2 shadow-xl backdrop-blur transition-all hover:border-gray-400 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Detect Deepfakes Instantly with AI
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Leading the Fight Against Deepfakes
        </h1>
        <p className="mt-5 max-w-prose sm:text-lg">
          Detection and Analysis with State-of-the-Art AI. Secure the Truth in a
          World of Synthetic Voices.
        </p>

        {/* Link component for navigation, styled with buttonVariants utility */}
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        {/* Hero section ends */}
      </MaxWidthWrapper>
      <div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/preview.png"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      <MovingCard/>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl sm:text-5xl">
              Start Detecting Deepfake
            </h2>
            <p className="mt-4 text-lg">
              Detecting Deepfake has never been easier than with Live.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-yellow-500">
                Step 1
              </span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-yellow-500">
                Step 2
              </span>
              <span className="text-xl font-semibold">
                Upload your Audio file
              </span>
              <span className="mt-2">
                We&apos;ll process your file and detect if its deepfake or not.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-yellow-500">
                Step 3
              </span>
              <span className="text-xl font-semibold">Click send</span>
              <span className="mt-2">
                It&apos;s that simple. Try out Live today - it really takes less
                than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="flex justify-center">
            <Carousel />
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        consequuntur iste voluptatum nisi. Accusamus a labore eligendi iste
        nihil ipsa, perspiciatis laboriosam consequatur, ducimus cupiditate
        nobis sint ea officiis doloribus.
      </div>
    </>
  );
}
