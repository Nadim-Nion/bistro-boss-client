import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const MangeItems = () => {
    const [menus] = useMenu();

    const handleUpdateMenu = menu => {
        console.log(menu);
    }

    const handleDeleteMenu = menu => {
        console.log(menu);
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