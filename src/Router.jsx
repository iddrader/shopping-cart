import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./components/App.jsx";
import Index from "./components/Index.jsx";
import Products from "./components/Products.jsx";
import Checkout from "./components/Checkout.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {index: true, element: <Index />},
                {path: "products", element: <Products />},
                {path: "checkout", element: <Checkout />}
            ]
        },
    ])

    return <RouterProvider router={router} />
};

export default Router;