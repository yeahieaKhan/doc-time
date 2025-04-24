// import React from "react";
// import Home from "../Home/Home";
// import Navbar from "../pages/Navbar";
// import { Outlet } from "react-router";
// import Footer from "../pages/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Root = () => {
//   return (
//     <div>
//       <Navbar></Navbar>

//       <div>
//         <Outlet>
//           <Home></Home>
//         </Outlet>
//       </div>
//       <Footer></Footer>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   );
// };

// export default Root;

// src/Root/Root.js
import React, { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const [loading, setLoading] = useState(true);
  console.log(loading);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <Outlet /> // Show the content when data is loaded
        )}
      </div>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
