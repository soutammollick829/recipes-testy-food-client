import { createBrowserRouter } from "react-router-dom";
import Main from "../Mainlayout/Main";
import Home from "../Pages/Home/Home";
import Kabobs from "../Pages/kabobs/Kabobs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import RecipesDetails from "../Pages/recipes/RecipesDetails";
import Blog from "../Pages/blogPage/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: () => fetch(`http://localhost:5000/chef`)
            },
            {
                path:'/chef/:id',
                element:<PrivateRoute><RecipesDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/kabobs',
                element:<Kabobs/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
    }
]);

export default router;