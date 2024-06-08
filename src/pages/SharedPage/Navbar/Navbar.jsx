import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const navItems = <>
        <li><Link>HOME</Link></li>
        <li><Link>CONTACT US</Link></li>
        {/* <li><Link>DASHBOARD</Link></li> */}
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">DASHBOARD</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">DASHBOARD</Link></li>
        }
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to="/order/Salads">ORDER FOOD</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="btn bg-opacity-40 btn-sm">
                    <FaShoppingCart className='text-2xl' />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {/* <li className='mt-2 font-semibold'>{user?.displayName}</li> */}
    </>

    const handleSignOut = () => {

        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">SIGN OUT</a> */}
                    {
                        user ?
                            <>
                                <button onClick={handleSignOut} className="btn btn-ghost">SIGN OUT</button>
                                <FaRegCircleUser className='text-2xl ml-0' />
                            </>
                            :
                            <>
                                <button className="btn btn-ghost">
                                    <Link to="/login">LOGIN</Link>
                                    <FaRegCircleUser className='text-2xl ml-0' />
                                </button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;