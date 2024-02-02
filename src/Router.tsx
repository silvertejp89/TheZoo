import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Animal from "./pages/Animal";
import Details from "./pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/animal", element: <Animal /> },
      { path: "/animal/:animalId", element: <Details /> },
    ],
  },
]);
