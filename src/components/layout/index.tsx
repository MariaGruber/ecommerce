import { Header } from "../Header";
import "./layout.css";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }:any) => {
    return (
        <div className='layout-container'>
            <Header />
            <div className='layout-content'>{children}</div>
            <Toaster/>
        </div>
    )
}

export default Layout;
