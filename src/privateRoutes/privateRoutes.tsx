import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/isAuth';

interface PrivateRouteProps {
    children: ReactNode;
}
  
const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuth = isAuthenticated();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth]);
  
    return <>{children}</>;
  };
  
  export default PrivateRoute;
