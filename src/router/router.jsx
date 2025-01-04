import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MianLayout/MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";


 export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <div>404 Not Found</div>,
    }
])