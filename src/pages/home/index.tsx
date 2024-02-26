import { useEffect } from 'react';
import { useLoaderData, useNavigate,} from "react-router-dom";
import Cards from "../../components/Cards";
import { Product } from "../../services/types";
import SearchBar from "../../components/SearchBar";
import { isAuthenticated } from '../../services/isAuth';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { products } = useLoaderData();

  
    useEffect(() => {
      // Check if the user is authenticated
      if (!isAuthenticated()) {
        // If not authenticated, redirect to the login page
        navigate('/login');
      }
    }, [navigate]);
  
  
    // Render the home component only if authenticated
    return isAuthenticated() ? (
      <>
        <SearchBar />
        {products?.map((product: Product) => (
          <Cards key={product.id} {...product} />
        ))}
      </>
    ) : null;
  };
  
  export default Home;