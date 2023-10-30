import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import MainLayout from './../MainLayout/MainLayout';
import Home from './../Pages/Home/Home';
import About from './../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import ErrorPage from '../ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("itemData.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);