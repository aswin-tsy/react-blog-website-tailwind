import React, { useEffect } from 'react';

const Pagination = ({onPageChange,selectedCategory,currentPage,blogs,pageSize}) => {

    

    const filteredBlogs =blogs.filter((blogs)=>!selectedCategory || blogs.category === selectedCategory)

    const totalpages = Math.ceil(filteredBlogs.length/pageSize);

    

        const renderPagination =()=>{
            return Array.from({length:totalpages},(_,i)=>i+1).map((pageNumber)=>(
                <li className={pageNumber===currentPage? "activePagination" : ""} key={pageNumber}>
                    <a   href='#'onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
                </li>
            ));
            
         }

     

  return (
    
       <ul className='pagination my-8 flex-wrap gap-4'>
         
        <li>
            <button className='text-gray-600' disabled ={currentPage===1} onClick={()=>onPageChange(currentPage-1)}>previous</button>
        </li> 
         
        
      <div className='flex'>{renderPagination()}</div>

        <li>
            <button className='text-gray-600' disabled ={currentPage===totalpages} onClick={()=>onPageChange(currentPage+1)}>next</button>
        </li> 

     </ul>
    
   
    
  )
}

export default Pagination;

