import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../Layouts/Header";
import SuccessSection from "./SuccessSection";
import About from "./About";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <SuccessSection></SuccessSection>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;
