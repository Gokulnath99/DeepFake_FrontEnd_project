import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import media from "@/sample_data/media.json";
import Link from "next/link";

function MediaCardComponent() {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full">
      {
      window.innerWidth <= 736 ?
      media.map((data, index) => 
      index < 2 && (
        <BackgroundGradient className="rounded-[22px] max-w-64 sm:min-h-svh p-4 sm:p-10 bg-white">
          <Image
            src={data.logoUrl}
            alt="jordans"
            height="100"
            width="100"
            className="object-contain"
          />
          <Image
            src={data.imageUrl}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {data.heading}
          </h1>
          
          {data.subHeading ? (
            <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {data.subHeading}
            </h3>
          ) : (
            <></>
          )}

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {data.description}
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <Link href={data.readMoreLink}>Read More</Link>
          </button>
        </BackgroundGradient>
      )):
      media.map((data) => 
      (
        <BackgroundGradient className="rounded-[22px] w-full md:max-w-80 sm:min-h-svh p-4 sm:p-10 bg-white">
          <Image
            src={data.logoUrl}
            alt="jordans"
            height="100"
            width="100"
            className="object-contain"
          />
          <Image
            src={data.imageUrl}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {data.heading}
          </h1>
          
          {data.subHeading ? (
            <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {data.subHeading}
            </h3>
          ) : (
            <></>
          )}

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {data.description}
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <Link href={data.readMoreLink}>Read More</Link>
          </button>
        </BackgroundGradient>
      ))
      }
    </div>
  );
}

export default MediaCardComponent;
