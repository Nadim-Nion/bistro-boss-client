import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaCommentDots, FaCreditCard, FaHome, FaListAlt, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from 'react-icons/io5';
import { FaBasketShopping } from 'react-icons/fa6';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* Dashboard Sidebar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'>
                            <FaCreditCard />
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart />
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addReview'>
                            <FaCommentDots />
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/myBooking'>
                            <FaListAlt />
                            My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                            <IoMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/Salads'>
                            <FaBasketShopping />
                            Order Food
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className='flex-1 m-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;