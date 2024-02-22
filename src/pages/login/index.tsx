import { NavLink } from "react-router-dom";
import { Input } from "../../components/Input";
import { CustomButton } from "../../components/button";
import "./login.css";

export default function LogIn(){
 return (
    <div className="page-container">
        <h1 className="login-title"> Welcome back!</h1>
        <p className="login-subtitle">Please Log in to start shopping</p>
        <Input title={"Email"} type="email" />
        <Input title={"Password"} type="password" />
        <CustomButton title="Log in" />
        <p>Don't have an account? Sing up <NavLink to="/signup">Here </NavLink></p>
    </div>
 ) 

}
   
