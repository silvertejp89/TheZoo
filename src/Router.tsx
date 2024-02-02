import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Details from "./pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/animals", element: <Animals /> },
      { path: "/animals/:animalId", element: <Details /> },
    ],
  },
]);
