import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa6'
import SideBar from '../Componets/SideBar';

const SingleBlog = () => {

    const data = useLoaderData();
    const {title, image, category, published_date, author, content, reading_time} = data[0];
    

  return (
    <div>
        <div className='text-white my-20 py-10 text-center bg-black'>
            <h2 className='font-bold px-5 text-5xl leading-snug lg:text-7xl'>Single blog page</h2>
            
        </div>

        <div className='mx-auto my-12 max-w-7xl flex flex-col md:flex-row gap-8'>
            <div className='lg:w-3/4 mx-auto'>
                <div >
                    <img src={image} alt='' className='w-full rounded '></img>
                </div>
                <h2 className='text-3xl font-bold text-blue-500 py-4 cursor-pointer'>{title}</h2>
                <p className='inline-flex  mb-3 items-center text-gray-600'><FaUser className='mr-2'/>{author} | {published_date}</p>
                <p className=' items-center text-gray-600 mb-3'><FaClock className='inline-flex mr-2'/>{published_date}</p>
                <p className='text-base text-gray-500 mb-2'>{content}</p>
                <div className='text-base text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eveniet, eos autem quos fuga quidem? 
                    Consequuntur animi dolores inventore nihil eveniet dolorem nostrum obcaecati perferendis, at incidunt quisquam sit culpa.</p><br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, qui porro voluptates dolore incidunt deleniti quaerat
                        provident fugiat consequatur beatae blanditiis cumque laudantium distinctio adipisci tempora repudiandae saepe sit neque.</p><br/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident minus non, assumenda ex, dignissimos vero odio 
                        et obcaecati voluptatibus earum tempore rem vitae consequuntur ullam, sequi eos! Soluta, autem natus.</p>    
                </div>
            </div>
            <div>
                <SideBar/>
            </div>
        </div>

    </div>
  )
}

export default SingleBlog;
