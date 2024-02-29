
import { useShoppingCart } from "../../contexts/shoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { getLocalStorageData } from "../../utils/localStorage";
import { products as productsData } from "../../products.json";
import { Product } from "../../services/types";
import "../productDescription/productDetail.css"

const Cart: React.FC = () => {
  const { 
    cartItems, 
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart, } = useShoppingCart();

  const products: Product[] = getLocalStorageData("products", []) || [];

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
          const product = findProductById(item.id);

          if (product) {
            return (
              <div key={item.id} className="cart-item">
                <div className="product-detail-img-container">
                    <img className="product-detail-image" 
                    src={product.image[0]} 
                    alt={product.name} 
                    style={{ width: '6rem', height: '8rem' }}/>
                </div>
                <div>
                    <p>{product.name}</p>
                    <p>{formatCurrency(product.price)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <section className="cart-buttons">
                        <button className="add-button-small" onClick={() => 
                            {increaseCartQuantity(product.id)}}>
                            +
                        </button>

                        <button onClick={() => 
                            {decreaseCartQuantity(product.id)}}>
                            -
                        </button>

                        <button onClick={() =>
                            {removeFromCart(product.id)}}>
                                Remove
                        </button>
                    </section> 
                </div>
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