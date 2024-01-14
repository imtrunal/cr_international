import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../Error';
import About from '../pages/about';
import Home from "../pages/home";
import MainLayout from "../layouts/mainLayout";
import Products from "../pages/products";
import Product from "../pages/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <MainLayout><Products /></MainLayout>,
  },
  {
    path: "/products/:category/:id",
    element: <MainLayout><Product /></MainLayout>
  }
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