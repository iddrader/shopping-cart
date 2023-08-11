import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Header />
            <Outlet context={[cart, setCart]}/>
        </>
    );
};

export default App;