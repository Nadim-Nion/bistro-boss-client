import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../SharedPage/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenus(popularItems)
            })
    }, []);

    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading="Check it out"
                heading="From Our Menu"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menus.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;