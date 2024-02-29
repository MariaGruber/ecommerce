import { useShoppingCart } from "../../contexts/shoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { getLocalStorageData } from "../../utils/localStorage";
import { products as productsData } from "../../products.json";
import { Product } from "../../services/types";
import "../productDescription/productDetail.css";

const Wishlist: React.FC = () => {
  
    const { 
    wishlistItems, 
    removeFromWishlist } = useShoppingCart();

    const products: Product[] = getLocalStorageData("products", []) || [];

    const findProductById = (productId: number) => {
        const product = productsData.find((p: any) => p.id === productId);
        return product;
    };

  return (
    <section>
      <header>
        <h2>Wishlist</h2>
      </header>
      <div>
        {wishlistItems.length === 0 ? (
          <div className="cart-item">
            <p>It's Empty!</p>
          </div>
        ) : (
          wishlistItems.map((item) => {
            const product = findProductById(item.id);

            if (product) {
              return (
                <div key={item.id} className="cart-item">
                  <div className="product-detail-img-container">
                    <img className="product-detail-image" 
                    src={product.image[0]} 
                    alt={product.name}
                    style={{ width: '6rem', height: '8rem'}} />
                  </div>
                    <div className="wishlist-info">
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <section className="wishlist-buttons">
                            <button onClick={() => removeFromWishlist(product.id)}>
                                Remove from wishlist
                            </button>
                        </section> 
                    </div>
                </div>
              );
            } else {
              return null;
            }
          })
        )}
      </div>
    </section>
  );
};

export default Wishlist;
