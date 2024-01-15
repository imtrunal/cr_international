import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../Error';
import Home from "../pages/home";
import MainLayout from "../layouts/mainLayout";
import Products from "../pages/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:category",
    element: <MainLayout><Products /></MainLayout>,
  },
  {
    path: "/products",
    element: <MainLayout><Products /></MainLayout>,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  //   children: [
  //     {
  //       path: "contact/:contactId",
  //       element: <About />,
  //     },
  //   ],
  // },
]);