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
import BlogUpdate from "./page/BlogUpdate";
import Account from "./page/Account";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import NotFound from "./page/Notfound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllLayout />,

      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/*", element: <NotFound /> }, // Add a 404 route

        // ✅ Protected Routes
        {
          path: "/post",
          element: (
            <ProtectedRoute>
              <BlogPost />
            </ProtectedRoute>
          ),
        },
        {
          path: "/blog/:id",
          element: (
            <ProtectedRoute>
              <BlogDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/blog",
          element: (
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          ),
        },
        {
          path: "/edit-blog/:id",
          element: (
            <ProtectedRoute>
              <BlogUpdate />
            </ProtectedRoute>
          ),
        },
        {
          path: "/account",
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
