import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }

    });

    return (
        <div>
            <SectionTitle heading="Payment History" subHeading="Pay Now"></SectionTitle>
            <div>
                <h2 className='text-3xl font-semibold my-3'> Total Payment: {payments.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Transaction ID</th>
                                <th>Price</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payments.map((payment, index) => <tr key={payment._id}>
                                    <td>{index + 1}</td>
                                    <td>{payment.email}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>${payment.price}</td>
                                    <td>{payment.date}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;