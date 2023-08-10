import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./components/App.jsx";
import Index from "./components/Index.jsx";
import Products from "./components/Products.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {index: true, element: <Index />},
                {path: "products", element: <Products />}
            ]
        },
    ])

    return <RouterProvider router={router} />
};

export default Router;