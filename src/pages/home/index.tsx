import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards";
import { Product } from "../../services/types";
import { LOCAL_STORAGE } from "../../utils/constants";

const Home: React.FC = () => {
    const { products} = useLoaderData(); 
  
    // Render the home component only if authenticated
    return (
      <>
        <h3>We offer great products at a great price</h3>
        {products?.map((product: Product) => (
          <Cards key={product.id} {...product} />
        ))}
      </>
    );
};
  
export default Home;
