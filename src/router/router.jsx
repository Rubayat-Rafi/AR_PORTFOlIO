import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MianLayout/MainLayout";


 export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
    }
])