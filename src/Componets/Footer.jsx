import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='px-4 pt-24 sm:max-w-xl md:max-w-full mx-6 ml-10'>
        <div className='grid lg:grid-cols-6 sm:grid-cols-2 gap-5 '>
          <div>
            <p className='text-gray-300 font-bold pb-3'>Category</p>
            <ul className='pb-4'>
              <li className='text-gray-500 py-1'>News</li>
              <li className='text-gray-500 py-1'>World</li>
              <li className='text-gray-500 py-1'>Games</li>
              <li className='text-gray-500 py-1'>Reference</li>
            </ul>
          </div>

          <div>
            <p className='text-gray-300 font-bold pb-3'>Apples</p>
            <ul className='pb-4'>
              <li className='text-gray-500 py-1'>Web</li>
              <li className='text-gray-500 py-1'>e-commerce</li>
              <li className='text-gray-500 py-1'>Business</li>
              <li className='text-gray-500 py-1'>Entertainment</li>
              <li className='text-gray-500 py-1'>Portfolio</li>
            </ul>
          </div>

          <div>
            <p className='text-gray-300 font-bold pb-3'>Cherries</p>
            <ul className='pb-4'>
              <li className='text-gray-500 py-1'>Media</li>
              <li className='text-gray-500 py-1'>Brochure</li>
              <li className='text-gray-500 py-1'>Nonprofit</li>
              <li className='text-gray-500 py-1'>Education</li>
              <li className='text-gray-500 py-1'>Projects</li>
            </ul>
          </div>

          <div>
            <p className='text-gray-300 font-bold pb-3'>Business</p>
            <ul className='pb-4'>
              <li className='text-gray-500 py-1'>Info</li>
              <li className='text-gray-500 py-1'>Personal</li>
              <li className='text-gray-500 py-1'>form</li>
              <li className='text-gray-500 py-1'>Wiki</li>
              <li className='text-gray-500 py-1'>Insta</li>
            </ul>
          </div>

          <div className='lg:col-span-2'>
            <p className='text-gray-300 font-bold pb-3'>Sunscribe for Updates</p>
            <form className='flex flex-col md:flex-row justify-center items-center'>
               <input type='email' placeholder='enter your mail ID'
               className='w-full h-12 outline-none focus:border-purple-400 aspect-auto px-4 border-gray-500 border-2 flex-grow rounded shadow-lg my-4'/>
               <button type='submit' className='bg-gray-900 px-4 lg:w-[25%] w-full mx-2 h-12 rounded border-gray-300 border-2 py-2 text-white font-normal'>subscribe</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer;
