import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllLayout from "./components/layout/AllLayout";
import Home from "./page/Home";
import Blog from "./page/Blog";
import About from "./page/About";
import Contact from "./page/Contact";
import BlogDetails from "./page/BlogDetails";
import Signup from "./page/Signup";
import Login from "./page/Login";
import BlogPost from "./page/BlogPost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/:id",
          element: <BlogDetails />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/post",
          element: <BlogPost />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
