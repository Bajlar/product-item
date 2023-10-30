import React from 'react';
import Header from '../Header/Header';
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="md:w-10/12 mx-auto md:px-0 px-4 min-h-[calc(100vh-130px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;