import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/layout';

import Home from './pages/home';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import LogIn from './pages/login';
import ProductDetail from './pages/productDescription';
import Wishlist from './pages/wishlist';
import SignUp from './pages/signUp';
import PrivateRoute from './privateRoutes/privateRoutes';
import ErrorPage from './pages/error';


// loader products
import { getProducts } from './services/productsService';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Layout><LogIn /></Layout>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/',
        element: <PrivateRoute><Layout><Home /></Layout></PrivateRoute>,
        errorElement: <ErrorPage />,
        loader:  async () => {
            return getProducts();
        }
    },
    {
        path: '/cart',
        element: <Layout><Cart /></Layout>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/checkout',
        element: <Checkout />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/productDetail/:id',
        element: <Layout><ProductDetail /></Layout>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/wishlist',
        element: <Layout><Wishlist /></Layout>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/signUp',
        element: <Layout><SignUp /></Layout>,
        errorElement: <ErrorPage />,
    }
]);

export default router;
