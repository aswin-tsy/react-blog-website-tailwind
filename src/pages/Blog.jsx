import React, { useEffect, useState } from 'react';
import BlogPage from '../Componets/BlogPage';

const Blog = () => {


 
  return (
    <div>
        <div className='py-40  bg-black text-white text-center px-4'>
           <h1 className='font-bold text-5xl lg:text-7xl leading-snug mb-5'>Blog Page</h1>
        </div>
    {/* All blogs container */}

        <div className='max-w-7xl mx-auto'>
            <BlogPage/>
        </div>

    </div>
  )
}

export default Blog;
