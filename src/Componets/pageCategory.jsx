import React from 'react';

const PageCategory = ({onSelectCategory,activeCategory}) => {

    const category = ["Startups","Security","AI","Apps","Tech"];
  return (
    <div className='mb-8  shadow-md px-4 lg:space-x-16 flex flex-wrap items-center py-5 border-b-2 text-gray-900 '>
        <button onClick={()=>onSelectCategory(null)} className={`mr-3 font-bold ${activeCategory===null?"active-button":""}`}>All</button>
      {
        category.map((cate)=>(

            <button onClick={()=>onSelectCategory(cate)} className={`mr-3 font-bold  ${activeCategory===cate?"active-button":""}`} key={cate}>{cate}</button>
        ))
      }
    </div>
  )
}

export default PageCategory;

