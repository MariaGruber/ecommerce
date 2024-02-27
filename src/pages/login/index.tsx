import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { getLocalStorageData, setLocalStorageData } from '../../utils/localStorage';
import { Input } from "../../components/Input";
import { CustomButton } from "../../components/button";
import { LOCAL_STORAGE } from '../../utils/constants';
import "./login.css";


export interface User {
    fullName: string;
    email: string;
    password: string;
}
  
const LogIn: React.FC = () => {
    const [error, setError] =  useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUsers = getLocalStorageData(LOCAL_STORAGE.USERS) as User[];
        console.log('users--->', storedUsers)
        console.log(typeof(storedUsers))
        // Find the user with the entered email in the local storage
        const user = storedUsers.find((u: User) => u.email === email) || {} as User;

        if (!user) {
            setError(true);
            // If the user is not found, display a message
            console.log('Email not valid. Please sign up.');
        } else {
            setError(false);
            if (user.password === password) {
                const startDate = new Date();
                console.log(`Welcome, ${user.fullName}!`);
                setLocalStorageData(LOCAL_STORAGE.SESSION, user)
                navigate('/');
            } else {
                // If the password does not match, display an error message
                console.log('Invalid password. Please try again.');
            }
        }
    };

return (
    <div className="page-container">
        <h1 className="login-title">Welcome back!</h1>
        <p className="login-subtitle">
            Please Log in to start shopping
        </p>
        <Input
            title="Email"
            type="email"
            placeholder=""
            value={email}
            onChange={setEmail}
            error={error}
        />
        <Input
            title="Password"
            type="password"
            placeholder=""
            value={password}
            onChange={setPassword}
            error={error}
        />
        <CustomButton title="Log in" onClick={handleLogin} />
        <p>
            Don't have an account? Sign up <NavLink to="/signup">Here</NavLink>
        </p>
    </div>
);
};
  
  export default LogIn;
   
