import { createBrowserRouter } from "react-router-dom";
import Main from "../Mainlayout/Main";
import Home from "../Pages/Home/Home";
import Kabobs from "../Pages/kabobs/Kabobs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Recipes from "../Pages/Home/TodayRecipes/Recipes";

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
        ]
    }
]);

export default router;