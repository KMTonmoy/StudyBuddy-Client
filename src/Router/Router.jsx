import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login";
import CreateAssignment from "../Components/CreateAssignment/CreateAssignment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },

            {
                path: "/assignments",
                element: <Login />,
            },
            {
                path: "/create",
                element: <CreateAssignment />,
            },
            {
                path: "/pending",
                element: <Login />,
            },
            {
                path: "/attempted-assignments",
                element: <Login />,
            },
        ]
    },
]);

export default router