import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Notification from "../pages/Notification/Notification";
import Cart from "../pages/Cart/Cart";
import Blogs from '../pages/Blogs/Blogs';
import Blog from "../pages/Blog/Blog";
import About from '../pages/About/About';

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Root />,
    children: [
      {
        path: "/home",

        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs/>,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "blog/:id",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About/>
      }
    ],
  },
]);
