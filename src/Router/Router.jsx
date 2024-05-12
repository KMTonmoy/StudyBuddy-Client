import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login";
import CreateAssignment from "../Components/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Register from "../Components/Authentication/Register";
import AssignmentDetail from "../Components/Assignment/AssignmentDetail";
import SubmitAssignment from "../Components/Assignment/SubmitAssignment";
import AssignmentPage from "../Components/AssignmentPage/AssignmentPAge";
import Pending from "../Components/Pending/Pending";
import UpdateAssignment from "../Components/Assignment/UpdateAssignment";
import GiveMark from "../Components/GiveMark/GiveMark";




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
                path: "/registration",
                element: <Register />,
            },
            {
                path: "/create",
                element: <PrivateRoute><CreateAssignment /></PrivateRoute>,
            },
            {
                path: "/assignment/:id",
                element: <PrivateRoute><AssignmentDetail /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: "/submit/:id",
                element: <PrivateRoute><SubmitAssignment /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },

            {
                path: "/giveMark/:id",
                element: <PrivateRoute><GiveMark /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/submited/663fa0a04e54b8ded2f680fc`)
            },

            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateAssignment /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: "/submit",
                element: <Pending></Pending>,
            },
            {
                path: "/assignments",
                element: <AssignmentPage />,
            },
            {
                path: "/pending",
                element: <PrivateRoute><Pending></Pending></PrivateRoute>
            },
            {
                path: "/attempted-assignments",
                element: <Login />,
            },
        ]
    },
]);

export default router