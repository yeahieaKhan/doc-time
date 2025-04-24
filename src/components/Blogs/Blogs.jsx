import React from "react";
import { useLoaderData } from "react-router";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      <div>
        <div className="text-center py-15">
          <h2 className="font-bold text-4xl py-10">Blogs</h2>
          <p>
            let's explore some basic concepts that will make you a good
            developer
          </p>
        </div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
