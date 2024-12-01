import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import Dasboard from "../dashboard/Dasboard";
import SignUp from "../components/SignUp";
import ContactUs from "../components/ContactUs";
import TermsAndConditions from "../components/Privacy";




// Create a new router instance with the defined routes.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path:"/contactus",
        element:<ContactUs/>
      },
      {
        path:"/term",
        element:<TermsAndConditions/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/single-book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/single-book/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
    ],
  },
  // {
  //   path: "/admin/dashboard",
  //   element: <DashBoardLayout />,
  //   children: [
  //     {
  //       path: "/admin/dashboard", // default dashboard route for "/admin/dashboard"
  //       element: <Dasboard />,
  //     },
  //     {
  //       path: "/admin/dashboard/upload", // relative path
  //       element: <UploadBook />,
  //     },
  //     {
  //       path: "/admin/dashboard/manage", // relative path
  //       element: <ManageBook />,
  //     },
  //     {
  //       path: "/admin/dashboard/update-book/:id", // relative path
  //       element: <EditBook />,
  //       loader: ({ params }) =>
  //         fetch(`http://localhost:5000/update-book/${params.id}`),
  //     },
      
  //   ],
  // },
]);

export default router;
