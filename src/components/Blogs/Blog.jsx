import React from "react";
import { FaNotesMedical } from "react-icons/fa";

const Blog = ({ blog }) => {
  const { question, publishedDate, answer } = blog;
  return (
    <div className="md:w-7xl mx-auto my-5 p-10  rounded-2xl bg-amber-200">
      <h2 className="border-b border-dashed py-5 text-3xl font-bold">
        {question}
      </h2>
      <p className="mt-5 font-bold text-blue-400">Answer:</p>
      <p className="border-b border-dashed pb-5">{answer}</p>
      <p className="flex  items-center py-5 ">
        <FaNotesMedical size={20} /> Added at {publishedDate}
      </p>
    </div>
  );
};

export default Blog;
