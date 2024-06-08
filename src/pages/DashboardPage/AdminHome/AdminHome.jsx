import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaMoneyBillTrendUp, FaTruck, FaUsers } from 'react-icons/fa6';
import { IoRestaurant } from 'react-icons/io5';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaMoneyBillTrendUp className='text-4xl' />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='text-4xl' />
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{stats.users}</div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <IoRestaurant className='text-4xl' />
                    </div>
                    <div className="stat-title">Menus</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaTruck className='text-4xl' />
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>

            </div>
        </div>
    );
};

export default AdminHome;