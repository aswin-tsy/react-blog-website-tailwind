import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const [popularBlogs,setPopularBlogs] =useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/blogs").then(res=>res.json()).then(data=>setPopularBlogs(data.slice(0,15)));
    },[]);
    

  return (
    <div>
    <div>
      <h3 className='font-bold text-2xl px-4'>Latest Blogs</h3>
      <div>
        {
            popularBlogs.slice(0,5).map((blog)=>(<div className='border-b-2 my-5 px-4 border-spacing-2' key={blog.id}>

                <h4>{blog.title}</h4>
                <Link to='/' className='font-base pb-2  hover:text-orange-400 inline-flex items-center py-2'> Read More
                <FaArrowRight className='mt-1 ml-2'/></Link>

                </div>
            ))
        }
      </div>
    </div>

    <div className='mt-10'>
      <h3 className='font-bold text-2xl px-4'>Popular Blogs</h3>
      <div>
        {
            popularBlogs.slice(5,10).map((blog)=>(<div className='border-b-2 my-5 px-4 border-spacing-2' key={blog.id}>

                <h4>{blog.title}</h4>
                <Link to='/' className='font-base pb-2  hover:text-orange-400 inline-flex items-center py-2'> Read More
                <FaArrowRight className='mt-1 ml-2'/></Link>

                </div>
            ))
        }
      </div>
    </div>

</div>
  )
}

export default SideBar;
