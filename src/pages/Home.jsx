import React from 'react';
import Banner from '../Componets/Banner';
import BlogPage from '../Componets/BlogPage';

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home;
