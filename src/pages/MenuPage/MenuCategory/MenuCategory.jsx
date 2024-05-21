import React from 'react';
import MenuItem from '../../SharedPage/MenuItem/MenuItem';
import Cover from '../../SharedPage/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, description, img }) => {
    return (
        <div className='my-14'>
            <div className='mb-12'>
                {title && <Cover img={img} title={title} description={description}></Cover>}
            </div>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className='flex justify-center mt-7'>
                    <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;