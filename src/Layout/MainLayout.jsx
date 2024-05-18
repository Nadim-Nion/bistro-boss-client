import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedPage/Footer/Footer';
import Navbar from '../pages/SharedPage/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;