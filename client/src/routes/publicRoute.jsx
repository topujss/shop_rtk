import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Shop from '../features/Shop/Shop';
import Single from '../pages/Single/Single';
import Wish from '../pages/Wish/Wish';
import Cart from '../pages/Cart/Cart';
import Admin from '../pages/Admin/Admin';

const publicRoute = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: '/:slug',
        element: <Single />,
      },

      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: '/admin',
        element: <Admin />,
        children: [
          {
            path: 'wish',
            element: <Wish />,
          },
          //   {
          //     path: 'brand',
          //     element: <Brand />,
          //   },
          //   {
          //     path: 'tag',
          //     element: <Brand />,
          //   },
          //   {
          //     path: 'category',
          //     element: <Brand />,
          //   },
          //   {
          //     path: 'product',
          //     element: <Brand />,
          //   },
        ],
      },
    ],
  },
]);

export default publicRoute;
