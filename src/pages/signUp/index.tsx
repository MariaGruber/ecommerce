import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { CustomButton } from "../../components/button";
import { validateEmail, validatePassword } from "../../services/validation";
import { setLocalStorageData } from "../../utils/localStorage";
import { LOCAL_STORAGE } from "../../utils/constants";
import "../login/login.css";

interface User {
    fullName: string;
    email: string;
    password: string;
  }
  
  export default function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
  
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordRequirements, setPasswordRequirements] = useState<string[]>([]);
  
    const handleEmailChange = (value: string) => {
      setEmail(value);
      setEmailValid(true);
    };
  
    const handlePasswordChange = (value: string) => {
      setPassword(value);
      const { isValid, requirements } = validatePassword(value);
      setPasswordValid(isValid);
      setPasswordRequirements(requirements);
    };
  
    const handleSignup = () => {
      // Validate input
      const isEmailValid = validateEmail(email);
      const isPasswordValid = validatePassword(password).isValid;
  
      if (isEmailValid && isPasswordValid) {
        // Perform signup logic (store in local storage or make an API call)
        const user: User = { fullName, email, password };
        setLocalStorageData(LOCAL_STORAGE.USERS, user);
        console.log('User signed up successfully:', user);
        navigate('/login');
      } else {
        if (!isEmailValid) {
          setEmailValid(false);
        }
        if (!isPasswordValid) {
          setPasswordValid(false);
        }
        alert('Invalid input. Please fix the highlighted fields.');
      }
    };
  
    return (
      <div className="page-container">
        <h1 className="login-title">Create account</h1>
        <p className="login-subtitle">Let's create your account together</p>
        <Input title="Full name" type="text" placeholder="" value={fullName} onChange={setFullName} />
        <Input
          title="Email"
          type="email"
          placeholder=""
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: emailValid ? '' : 'red' }}
        />
        <Input
          title="Password"
          type="password"
          placeholder=""
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: passwordValid ? '' : 'red' }}
        />
        <CustomButton title="Sign Up" onClick={handleSignup} />
        <p>
          Already have an account? Log in <Link to="/login">Here </Link>
        </p>
        {!passwordValid && (
          <div>
            <p>Password Requirements:</p>
            <ul>
              {passwordRequirements.map((requirement, index) => (
                <li key={index} style={{ color: requirement.includes('✗') ? 'red' : 'green' }}>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }