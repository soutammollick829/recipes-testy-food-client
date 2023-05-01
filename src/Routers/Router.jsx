import { createBrowserRouter } from "react-router-dom";
import Main from "../Mainlayout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
]);

export default router;