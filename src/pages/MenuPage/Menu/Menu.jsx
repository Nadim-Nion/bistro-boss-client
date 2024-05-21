import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../SharedPage/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" description="Would You Like To Try A Dish?"></Cover>
        </div>
    );
};

export default Menu;