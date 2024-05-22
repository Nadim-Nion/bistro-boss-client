import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/SharedPage/Footer/Footer';
import Navbar from '../pages/SharedPage/Navbar/Navbar';

const MainLayout = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login');

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;