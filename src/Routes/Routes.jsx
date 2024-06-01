import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/HomePage/Home/Home";
import Menu from "../pages/MenuPage/Menu/Menu";
import Order from "../pages/OderPage/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/DashboardPage/Cart/Cart";
import AllUsers from "../pages/DashboardPage/AllUsers/AllUsers";
import AddItems from "../pages/DashboardPage/AddItems/AddItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Regular User Routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // Admin Only Routes
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);