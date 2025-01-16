import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import EventDetails from "@/Pages/EventDetails/EventDetails";
import PrivetedRoute from "@/Priveted/PrivetedRoute";
import CreateEvent from "@/Pages/CreateEvent/CreateEvent";
import DashboardHome from "@/Pages/Dashboard/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/eventDetails/:id",
        element: <EventDetails />,
      },
      {
        path: "/eventCreation",
        element: (
          <PrivetedRoute>
            <CreateEvent />
          </PrivetedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivetedRoute>
            <DashboardHome></DashboardHome>
          </PrivetedRoute>
        ),
      },
    ],
  },
]);

export default router;
