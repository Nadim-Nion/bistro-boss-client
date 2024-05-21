import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../SharedPage/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menus] = useMenu();
    const popularMenus = menus.filter(menu => menu.category === 'popular');

    /* const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenus(popularItems)
            })
    }, []); */

    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading="Check it out"
                heading="From Our Menu"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularMenus.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-7'>
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;