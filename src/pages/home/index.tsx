import { useLoaderData } from "react-router-dom";
import { Product } from "../../services/types";

const Home = () => {
    const  products = useLoaderData();
    console.log('data--->', products)
    return <div>Home</div>
};

export default Home;
