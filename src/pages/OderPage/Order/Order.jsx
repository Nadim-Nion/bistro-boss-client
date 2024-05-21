import React, { useState } from 'react';
import orderImg from '../../../assets/shop/order.jpg';
import Cover from '../../SharedPage/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu();
    const { category } = useParams();
    console.log(category);
    const drinksMenus = menus.filter(menu => menu.category === 'drinks');
    const dessertMenus = menus.filter(menu => menu.category === 'dessert');
    const pizzaMenus = menus.filter(menu => menu.category === 'pizza');
    const saladMenus = menus.filter(menu => menu.category === 'salad');
    const soupMenus = menus.filter(menu => menu.category === 'soup');

    return (
        <div>
            <Cover img={orderImg} title="Order Your Food" description="Would You Like To A Dish?"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center py-16">
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={saladMenus}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzaMenus}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soupMenus}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessertMenus}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinksMenus}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;