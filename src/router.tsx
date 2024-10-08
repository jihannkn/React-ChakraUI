import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/home';
import Product from './pages/product';
import CreateProduct from './pages/product/create';
import UpdateProduct from './pages/product/update';
import DetailProduct from './pages/product/detail';
import Category from './pages/category';
import CreateCategory from './pages/category/create';
import UpdateCategory from './pages/category/update';
import DetailCategory from './pages/category/detail';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import AuthLayout from './components/layouts/AuthLayout';
import DashboardLayout from './components/layouts/DashboardLayout';
import Dashboard from './pages/dashboard';
import Shopingcard from './pages/home/Shopingcard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shoping-cart/:id",
                element: <Shopingcard/>
            }
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "product",
                children: [
                    {
                        index: true,
                        element: <Product />,
                    },
                    {
                        path: "create",
                        element: <CreateProduct />,
                    },
                    {
                        path: "update/:id",
                        element: <UpdateProduct />,
                    },
                    {
                        path: "detail/:id",
                        element: <DetailProduct />,
                    },
                ],
            },
            {
                path: "category",
                children: [
                    {
                        index: true,
                        element: <Category />,
                    },
                    {
                        path: "create",
                        element: <CreateCategory />,
                    },
                    {
                        path: "update/:id",
                        element: <UpdateCategory />,
                    },
                    {
                        path: "detail/:id",
                        element: <DetailCategory />,
                    },
                ],
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
