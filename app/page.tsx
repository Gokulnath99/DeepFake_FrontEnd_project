"use client";

// Importing necessary React library
import React from "react";

// Importing custom components and utilities
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from "next/link"; // Link component from Next.js for client-side transitions
import { ArrowRight } from "lucide-react"; // Icon component from 'lucide-react' library
import { buttonVariants } from "@/components/ui/button"; // Utility for button styling
import { MovingCard } from "@/components/MovingCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import feature_image from "@/public/featured/feature1.png";
import { motion } from "framer-motion";

// HomePage functional component definition
export default function HomePage() {
  return (
    <>
      {/* MaxWidthWrapper component to control the maximum width of the content */}
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
        {/* Hero section starts */}
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <TextGenerateEffect words="Leading the Fight Against Deepfakes" />
        </h1>
        <p className="mt-5 max-w-prose sm:text-lg text-white">
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
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="cardEffect m-0">
          <div className="row-span-1 rounded-xl transition duration-200 shadow-input dark:shadow-none bg-white border border-transparent justify-between flex flex-col space-y-4">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              debitis temporibus incidunt veniam reiciendis quibusdam adipisci
              esse rerum molestias tenetur corporis sunt saepe sed molestiae
              animi, libero laborum natus facere!
            </div>
            <Image
              src={feature_image}
              alt={"feature1"}
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </div>

      <MaxWidthWrapper>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full mt-8">
          <motion.div whileHover={{ scale: 1.01 }} className="cardEffect">
            <h3 className="text-[#00274C] dark:text-[#FFCB05] text-sm uppercase tracking-[10px] mb-2">
              SPONSORS
            </h3>
            <h1 className="text-[#00274C] dark:text-[#FFCB05] text-2xl font-bold">
              Thank-you to our Sponsors!
            </h1>
            <p className="text-left pr-3 text-lg">
              Their continued support is key to our success - we wouldn't be
              able to do it without them!
            </p>
            {/* Sponsors moving card */}
            <MovingCard />
          </motion.div>
          <motion.div whileHover={{ scale: 1.01 }} className="cardEffect">
            <div className="text-[#00274C] dark:text-[#FFCB05]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              debitis temporibus incidunt veniam reiciendis quibusdam adipisci
              esse rerum molestias tenetur corporis sunt saepe sed molestiae
              animi, libero laborum natus facere!
            </div>
          </motion.div>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit consequuntur iste voluptatum nisi. Accusamus a labore
          eligendi iste nihil ipsa, perspiciatis laboriosam consequatur, ducimus
          cupiditate nobis sint ea officiis doloribus.
        </div>
      </MaxWidthWrapper>
    </>
  );
}
