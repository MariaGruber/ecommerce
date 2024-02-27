
import { useShoppingCart } from "../../contexts/shoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { getLocalStorageData } from "../../utils/localStorage";
import { products as productsData } from "../../products.json";
import { Product } from "../../services/types";

const Cart: React.FC = () => {
  const { 
    cartItems, 
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart, } = useShoppingCart();


  // Retrieve the products array from local storage
  const products: Product[] = getLocalStorageData("products", []) || [];

  // Function to find product details based on id
  const findProductById = (productId: number) => {
    const product = productsData.find((p: any) => p.id === productId);
  return product;
  };

  return (
    <section>
      <header>
        <h2>Shopping Cart</h2>
      </header>

      <div>
        {cartItems.map((item) => {
        
          // Find the product based on item.id
          const product = findProductById(item.id);

          if (product) {
            return (
              <div key={item.id} className="cart-item">
                <div>
                    <img src={product.image[0]} alt={product.name} />
                </div>
                {/* Display Product Name */}
                <p>{product.name}</p>

                {/* Display Product Price */}
                <p>{formatCurrency(product.price)}</p>

                {/* Display Quantity */}
                <p>Quantity: {item.quantity}</p>

                {/* Add more details or actions as needed */}
                <button onClick={() => {increaseCartQuantity(product.id)}}>
                  +
                </button>
                <button onClick={() => {decreaseCartQuantity(product.id)}}>
                  -
                </button>
                <button onClick={() => {removeFromCart(product.id)}}>
                  Remove from Cart
                </button>
              </div>
            );
          } else {
            // Handle the case where the product is not found
            return (
              <div key={item.id} className="cart-item">
                <p>Product not found</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Cart;