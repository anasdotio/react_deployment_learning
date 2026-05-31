import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
