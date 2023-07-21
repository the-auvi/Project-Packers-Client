import { Outlet } from "react-router-dom";
import Navbar from "../container/Navbar/Navbar";
import Footer from "../container/Footer/Footer";
import TitleBar from "../components/TitleBar/TitleBar";

const Root = () => {
    
    return (
        <>
            <Navbar />
            <TitleBar/>
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default Root;