import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../SharedPage/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menus] = useMenu();
    const offeredMenus = menus.filter(menu => menu.category === 'offered');
    const dessertMenus = menus.filter(menu => menu.category === 'dessert');
    const pizzaMenus = menus.filter(menu => menu.category === 'pizza');
    const saladMenus = menus.filter(menu => menu.category === 'salad');
    const soupMenus = menus.filter(menu => menu.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>

            {/* Menu Cover */}
            <Cover img={menuImg} title="Our Menu" description="Would You Like To Try A Dish?"></Cover>

            {/* Offered Menu Category */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offeredMenus}></MenuCategory>

            {/* Dessert Menu Category */}
            <MenuCategory
                items={dessertMenus}
                title="Desserts"
                description="Indulge your sweet tooth with our decadent dessert menu, featuring a delightful array of treats. Savor the rich, velvety chocolate lava cake, or enjoy the classic elegance of our cream with its perfectly caramelized top."
                img={dessertImg}
            ></MenuCategory>

            {/* Pizza Menu Category */}
            <MenuCategory
                items={pizzaMenus}
                title="Pizza"
                description="Indulge in our delectable pizza creations crafted with the finest ingredients and bursting with flavor. From classic to adventurous BBQ Chicken, each pizza is meticulously prepared to satisfy every craving."
                img={pizzaImg}
            ></MenuCategory>

            {/* Salads Menu Category */}
            <MenuCategory
                items={saladMenus}
                title="Salads"
                description="
                Savor the crisp, vibrant flavors of our salad selection, where freshness meets innovation. From classic garden salads bursting with seasonal greens and colorful vegetables to tantalizing gourmet creations featuring succulent proteins and artisanal dressings, each dish is a celebration of wholesome ingredients and culinary creativity."
                img={saladImg}
            ></MenuCategory>

            {/* Soups Menu Category */}
            <MenuCategory
                items={soupMenus}
                title="Soups"
                description="The soup category is a diverse culinary realm encompassing a myriad of flavors, textures, and cultural influences. From comforting classics like chicken noodle and tomato bisque to adventurous creations like Thai coconut curry and Tuscan white bean, soups offer warmth and nourishment for the body and soul."
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;