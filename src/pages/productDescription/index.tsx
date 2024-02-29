import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../services/types';
import { getProductById } from '../../services/productsService';
import { useShoppingCart } from '../../contexts/shoppingCartContext';
import HeartIconEmpty from '../../assets/icons/heart.svg';
import { formatCurrency } from '../../utils/formatCurrency';
import HeartIcon from '../../assets/icons/heart-filled.svg';
import './productDetail.css'

const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const { addToWishlist, wishlistItems = [], removeFromWishlist} = useShoppingCart();
    const isWishlistItem = wishlistItems?.some((item) => item.id === parseInt(id)) || false;
    
    const handleWishlistToggle = () => {
        if (isWishlistItem) {
            if (removeFromWishlist) {
                removeFromWishlist(parseInt(id));
            }
        } else {
            if (addToWishlist) {
                addToWishlist(parseInt(id));
            }
        }
    }
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity = getItemQuantity(parseInt(id));
    
    useEffect(() => {
        if (id) {
          const fetchData = async () => {
            try {
              const productDetail = await getProductById(parseInt(id)) as Product;
              setProduct(productDetail);
            } catch (error) {
              console.error('Error fetching product details:', error);
              setProduct(null); // Set product to null if there's an error
            }
          };
          fetchData();
        }
      }, [id]);
  
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => 
        {
            const newQuantity = parseInt(event.target.value, 10) || 1;
        };
  
    if (!product) {
      return <p>Product not found</p>;
    }
  
    return (
      <div>
        <section className="product-detail-img-container">
            <div className='product-thumbnails'>
                {product.image.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Product ${index}`}
                        style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        onClick={() => {setSelectedImageIndex(index)} 
                        }
                    />
                ))}
            </div>

            <div className='product-detail-image'>
                <img src={product.image[selectedImageIndex]} alt="Product" style={{ width: '200px', height: '200px' }} />
            </div>
        </section>

        <div className="product-detail-info">
            <section className='product-name-wishlist-icon'>
                <h2>{product.name}</h2>
                <img className="heart-icon" src={isWishlistItem ? HeartIcon : HeartIconEmpty} alt="add to wishlist" onClick={handleWishlistToggle} />
            </section>
            <p className="price">Price: {formatCurrency(product.price)}| Stock: {product.stock}</p>
            <div> Rating: {product.rating} stars </div>
            <p>{product.description}</p>
            <div className="product-detail-quantity">
                <label>Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    min={1}
                    max={product.stock}
                    onChange={handleQuantityChange}
                />
            </div>
            <button className="add-button" onClick={() => {
                increaseCartQuantity(parseInt(id))
            }}>Add to Cart</button>

            <button className="less-button" onClick={() => {
                decreaseCartQuantity(parseInt(id))
            }}> - </button>
  
            <button className="remove-button" onClick={() => {
                removeFromCart(parseInt(id))
            }}>Remove from Cart</button>
            </div>
      </div>
    );
  };
  
  export default ProductDetail;
