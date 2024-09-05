import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='px-8 py-32 bg-black mx-auto'>
        <div className=' text-white text-center'>
            <h1 className='font-bold text-5xl lg:text-7xl mb-5'>Welcome to Our Blog</h1>
            <p className='text-gray-100 mx-auto mb-5 lg:w-3/5'>Start your blog today and join a community of writers and readers
                who are passionate about sharing theoir stories and ideas. We offer
                everything you need to get started, from helpful tips and tutorials.
            </p>
            <div>
                <Link to='/' className='font-medium hover:text-orange-400 inline-flex items-center py-2'>Learn more 
                <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner;
