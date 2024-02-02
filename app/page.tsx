import React from 'react';
// import Layout from './layout';
// import Navbar from './components/Navbar'
// import FileUpload from './components/FileUpload';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/app/components/ui/button';

export default function HomePage() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 sm:mt-20 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-300 bg-white px-7 py-2 shadow-xl backdrop-blur transition-all hover:border-gray-400 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Detect Deepfakes Instantly with AI
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
            Lead the Fight Against Deepfake Audio with <span className="text-yellow-500">LIVE</span>
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          Real-Time Detection and Analysis with State-of-the-Art AI. Secure the Truth in a World of Synthetic Voices.
        </p>

        <Link className={buttonVariants({
          size: 'lg',
          className: "mt-5"
        })} href='/dfaudio'>
          Get Started <ArrowRight className='ml-2 h-5 w-5'/>
        </Link>
        {/* <FileUpload className='p-16 mt-10 border border-neutral-200 bg-white'/> */}
      </MaxWidthWrapper>
      <div>
        <div className="relative isolate">
          <div className='absolute left-[calc(50%-11rem)] aspect-[1155/678] w-screen -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5c51f8] to-[#27527b] opacity-90 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>
          {/* <div className='absolute right-[calc(50%-11rem)] aspect-[1155/678] w-screen translate-x-1/2 rotate-[-30deg] bg-gradient-to-tr from-[#5c51f8] to-[#27527b] opacity-90 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div> */}
          {/* <div aria-hidden="true" className='pointer-events-none absolute insert-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          </div> */}
        </div>
      </div>
    </>
    
  );
}
