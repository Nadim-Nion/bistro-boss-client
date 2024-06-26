import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaCommentDots, FaCreditCard, FaHome, FaListAlt, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from 'react-icons/io5';
import { FaBasketShopping, FaBook, FaList, FaUsers, FaUtensils } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCart();

    // TODO: Get the admin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className='flex'>
            {/* Dashboard Sidebar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensils />
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList />
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaBook />
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users'>
                                        <FaUsers />
                                        All Users
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
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
                                        Payment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart />
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addReview'>
                                        <FaCommentDots />
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'>
                                        <FaListAlt />
                                        Payment History
                                    </NavLink>
                                </li>
                            </>
                    }
                    {/* Shared Nav links */}
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
                    <li>
                        <NavLink to='/order/contact'>
                            <MdEmail />
                            Contact
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