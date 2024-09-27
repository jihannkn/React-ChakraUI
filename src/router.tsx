import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/home/Index';
import Product from './pages/product/Index';
import UpdateProduct from './pages/product/update/Index';
import DetailProduct from './pages/product/detail/Index';
import CreateCategory from './pages/category/create/Index';
import Category from './pages/category/Index';
import DetailCategory from './pages/category/detail/Index';
import UpdateCategory from './pages/category/update/Index';
import CreateProduct from './pages/product/create/Index';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
        path: "/product",
        element: <MainLayout />,
        children:[
            {
                index: true,
                element: <Product />
            },
            {
                path: "create",
                element: <CreateProduct />
            },
            {
                path: "update/:id",
                element: <UpdateProduct />
            },
            {
                path: "detail/:id",
                element: <DetailProduct />
            }

        ]
    },
    {
        path: "/category",
        element: <MainLayout />,
        children:[
            {
                index: true,
                element: <Category />
            },
            {
                path: "create",
                element: <CreateCategory />
            },
            {
                path: "update/:id",
                element: <UpdateCategory />
            },
            {
                path: "detail/:id",
                element: <DetailCategory />
            }

        ]
    }
  ]);

  export default router;
