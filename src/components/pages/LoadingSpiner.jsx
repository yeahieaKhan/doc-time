import React from "react";

const LoadingSpiner = () => {
  return (
    <div className="flex justify-center items-center mt-50">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default LoadingSpiner;
