"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';

interface FileWithPreview extends File {
  preview: string;
}

interface DropzoneProps {
  className?: string;
}

const Dropzone: React.FC<DropzoneProps> = ({ className }) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const mappedAcceptedFiles = acceptedFiles.map(file =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );

    setFiles(prevFiles => [...prevFiles, ...mappedAcceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'audio/*': []
    },
    onDrop
  });

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== name));
  }

  const removeAll = () => {
    setFiles([]);
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!files.length) return;

    console.log(files)
    
    const formData = new FormData()

    files.forEach( file => formData.append('file', file) )
    
    const data = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({files, formData})
    })

    console.log(data)
    
  }

  // const { getUser } = getKindeServerSession();
  // const user = getUser(); 

  return (
    <form onSubmit={handleSubmit} className='h-screen'>
      <h1>Hi, {}</h1>
      <div
        {...getRootProps({
          className: className
        })}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center gap-4  box-shadow shadow-xl mt-16 h-96 bg-slate-300'>
          <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop files here, or click to select files</p>
          )}
        </div>
      </div>

      {/* Preview */}
      <section className='mt-10'>
        <div className='flex gap-4'>
          <h2 className='title text-3xl font-semibold text-black'>Preview</h2>
          <button
            type='button'
            onClick={removeAll}
            className='mt-1 text-[12px] uppercase tracking-wider font-bold text-black border border-secondary-400 rounded-md px-3 bg-yellow-500 hover:bg-secondary-400 hover:text-white transition-colors'
          >
            Remove all files
          </button>
          <button
            type='submit'
            className='ml-auto mt-1 text-[12px] uppercase tracking-wider font-bold text-black border border-purple-400 rounded-md px-3 bg-purple-300 hover:bg-purple-400 hover:text-white transition-colors'
          >
            Send
          </button>
        </div>

        {/* Accepted files */}
        <h3 className='title text-lg font-semibold text-black mt-10 border-b border-black pb-3 '>
          Accepted Files
        </h3>
        <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
          {files.map(file => (
            <li key={file.name} className='relative h-auto rounded-md shadow-lg'>
              <div className='w-fit h-8 border p-2 border-white rounded-lg flex justify-center items-center bg-slate-50'>
                <p className="">{file.name}</p>
                <button
                  type='button'
                  className='w-7 h-7 border border-secondary-400 bg-secondary-400 bg-white rounded-full flex justify-center items-center absolute -top-5 -right-24 hover:bg-red-600 transition-colors'
                  onClick={() => removeFile(file.name)}
                >
                  <XMarkIcon className='w-5 h-5 fill-black hover:fill-secondary-400 transition-colors' />
                </button>
              </div>
            
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
}

export default Dropzone;
