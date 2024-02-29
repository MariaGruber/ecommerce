import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { getLocalStorageData, setLocalStorageData } from '../../utils/localStorage';
import { Input } from "../../components/Input";
import { CustomButton } from "../../components/button";
import { LOCAL_STORAGE } from '../../utils/constants';
import toast from 'react-hot-toast';
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
        const user = storedUsers.find((u: User) => u.email === email) || {} as User;

        if (!user) {
            setError(true);
            toast.error('Email not valid. Please sign up.');
        } else {
            setError(false);
            if (user.password === password) {
                const startDate = new Date();
                toast.success(`Welcome, ${user.fullName}!`);
                setLocalStorageData(LOCAL_STORAGE.SESSION, user)
                navigate('/');
            } else {
                toast.error('Invalid password. Please try again.');
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
            placeholder="Example@gmail.com"
            value={email}
            onChange={setEmail}
            error={error}
        />
        <Input
            title="Password"
            type="password"
            placeholder="**********"
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
   
