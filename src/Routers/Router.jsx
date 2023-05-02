import { createBrowserRouter } from "react-router-dom";
import Main from "../Mainlayout/Main";
import Home from "../Pages/Home/Home";
import Kabobs from "../Pages/kabobs/Kabobs";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/kabobs',
                element:<Kabobs/>
            }
        ]
    }
]);

export default router;