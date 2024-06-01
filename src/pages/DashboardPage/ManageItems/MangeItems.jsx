import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MangeItems = () => {
    const [menus, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleUpdateMenu = menu => {
        console.log(menu);
    }

    const handleDeleteMenu = menu => {
        // console.log(menu);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menus/${menu._id}`);
                // console.log(res.data);

                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${menu.name} has been deleted.`,
                        icon: "success"
                    });
                    refetch();

                }

            }
        });
    }

    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up!"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menus.map((menu, index) => <tr key={menu._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={menu.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {menu.name}
                                    </td>
                                    <td>${menu.price}</td>
                                    <td>
                                        <button onClick={() => handleUpdateMenu(menu)} className="btn  bg-orange-600">
                                            <FiEdit className='text-white' />
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteMenu(menu)} className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className='text-red-600' />
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MangeItems;