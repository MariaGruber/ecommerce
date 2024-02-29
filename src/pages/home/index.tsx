import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards";
import { Product } from "../../services/types";
import "./home.css";

const Home: React.FC = () => {
    const { products } = useLoaderData();
    return (
      <>
        <h3 className="home-title">Welcome, We offer great products at a great price</h3>
        {products?.map((product: Product) => (
          <Cards key={product.id} {...product} />
        ))}
      </>
    );
};
  
export default Home;
