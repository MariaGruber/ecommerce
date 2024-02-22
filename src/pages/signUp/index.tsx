import { NavLink } from "react-router-dom";
import { Input } from "../../components/Input";
import { CustomButton } from "../../components/button";
import "../login/login.css";

export default function SignUp() {
    return (
        <div className="page-container">
            <h1 className="login-title"> Create account</h1>
            <p className="login-subtitle">let's create your account together</p>
            <Input title={"Full name"} type="text" />
            <Input title={"Email"} type="email" />
            <Input title={"Password"} type="password" />
            <CustomButton title="Sign Up" />
            <p>Alreday have an account? Log in <NavLink to="/login">Here </NavLink></p>
    </div>
    )
}
