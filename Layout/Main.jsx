import { Outlet } from "react-router-dom";
import Navbar from "../src/pages/Shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;