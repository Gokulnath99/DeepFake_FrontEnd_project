import React from 'react';
import Layout from './layout';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';

export default function HomePage() {
  return (
    <Layout>
      <Navbar />
      <FileUpload className='p-16 mt-10 border border-neutral-200 bg-white'/>
    </Layout>
  );
}
