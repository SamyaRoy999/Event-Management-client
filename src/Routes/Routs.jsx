import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
// import SingelRoom from "../Pages/SingelRoom/SingelRoom";
// import Rooms from "../Pages/Rooms/Rooms";
// import MyRooms from "../Pages/MyRoooms/MyRooms";
// import PrivetedRoute from "../Priveted/PrivetedRoute";

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
      //   {
      //     path: "/rooms",
      //     element: <Rooms />,
      //     loader: () => fetch("https://server-nine-beryl.vercel.app/rooms"),
      //   },
      //   {
      //     path: "/singleRoom/:id",
      //     element: <SingelRoom />,
      //   },
      //   {
      //     path: "myRooms",
      //     element: (
      //       <PrivetedRoute>
      //         <MyRooms />
      //       </PrivetedRoute>
      //     ),
      //   },
    ],
  },
]);

export default router;
