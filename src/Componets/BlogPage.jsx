import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import PageCategory from './pageCategory';
import SideBar from './SideBar';

const BlogPage = () => {

    const [blogs,setBlogs] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1);
    const pageSize = 12 //no.of blog per page
    const [selectedCategory, SetSelectedCategory] = useState(null);
    const [activeCategory,setActiveCategory] = useState(null);

  

    useEffect(()=>{
  
      const fetchBlog = async ()=>{
        let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

        if(selectedCategory){

          url += `&category=${selectedCategory}`
        }
        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);

        

        
          
      
        

      }
  
       fetchBlog();
       

    },[currentPage,pageSize,selectedCategory]);

    

    const handlePagination = (pageNumber)=>{
        SetCurrentPage(pageNumber);
    };

    const handleCategory = (category)=>{

      SetSelectedCategory(category);
      SetCurrentPage(1);
      setActiveCategory(category);
    }

  return (
    <div>
        <div><PageCategory onSelectCategory ={handleCategory}  activeCategory={activeCategory} /></div>

        <div className='flex flex-col md:flex-row gap-8'>

          <BlogCard blogs={blogs} currentPage={currentPage} 
        selectedCategory={selectedCategory} pageSize={pageSize} />
        
          <div>
             <SideBar/>
          </div>

        </div>

        <div>
          <Pagination onPageChange={handlePagination} selectedCategory={selectedCategory} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
        </div>
        

    </div>
  )
}

export default BlogPage;
