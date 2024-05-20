import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../SharedPage/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import PopularMenu from '../../HomePage/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" description="Would You Like To Try A Dish?"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;