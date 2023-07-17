import {createBrowserRouter} from "react-router-dom";
// import App from "../App";
import Root from "../layout/Root";
import Home  from  "../pages/Home/Home"
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";

export const router = createBrowserRouter([
    {
        path: "/home",
        element: <Root />,
        children:[
            {
                path: "/home",
                
                element: <Home/>,
            },
            {
                path: "blog",
                element: <Blog/>
            },
            {
                path: "shop",
                element: <Shop/>
            }
        ]
    },
]);

