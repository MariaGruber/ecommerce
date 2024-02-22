import { ReactComponentElement } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import "./layout.css";

const Layout = ({ children }:any) => {
    return (
        <div className='layout-container'>
            <Header />
            <div className='layout-content'>{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout;
