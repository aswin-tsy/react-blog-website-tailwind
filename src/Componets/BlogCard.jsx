import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid grid-rows-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link
          to={`/blogs/${blog.id}`}
          className="p-5 rounded shadow-lg"
          key={blog.id}
        >
          <div className="grid-rows-1">
            <img src={blog.image} className="w-full" alt="/" />
            <h3 className=" font-bold text-gray-900  hover:text-blue-500 my-2">
              {blog.title}
            </h3>
            <p className="font-sm text-gray-600 mb-2">
              <FaUser className="inline-flex mr-2 " />
              {blog.author}
            </p>
            <p className="font-sm text-gray-500">
              Published:{blog.published_date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
