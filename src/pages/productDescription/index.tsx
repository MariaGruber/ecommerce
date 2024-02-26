import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../services/types';
import { getProductById } from '../../services/productsService';
import './productDetail.css'

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    
    useEffect(() => {
        if (id) {
          const fetchData = async () => {
            try {
              const productDetail = await getProductById(parseInt(id));
              console.log('productDetail--->', productDetail);
              setProduct(productDetail);
            } catch (error) {
              console.error('Error fetching product details:', error);
              setProduct(null); // Set product to null if there's an error
            }
          };
          fetchData();
        }
      }, [id]);
  
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuantity = parseInt(event.target.value, 10) || 1;
      setQuantity(newQuantity);
    };
  
    if (!product) {
      return <p>Product not found</p>;
    }
  
    return (
      <div>
        <div className='product-thumbnails'>
          {/* Small squares with images */}
          {product.image.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index}`}
              style={{ width: '50px', height: '50px', cursor: 'pointer' }}
              onClick={() => {setSelectedImageIndex(index)} 
                // Handle image click to display larger image
              }
            />
          ))}
        </div>
  
        <div className='product-detail-image'>
          {/* Large image */}
          <img src={product.image[selectedImageIndex]} alt="Product" style={{ width: '200px', height: '200px' }} />
        </div>
  
        <div>
          {/* Title and price */}
          <h2>{product.name}</h2>
          <p>
            Price: ${product.price} | Stock: {product.stock}
          </p>
  
          {/* Rating */}
          <div>
            Rating: {product.rating} stars
          </div>
  
          {/* Description */}
          <p>{product.description}</p>
  
          {/* Quantity selection */}
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              min={1}
              max={product.stock}
              onChange={handleQuantityChange}
            />
          </div>
  
          {/* Add to cart button */}
          <button onClick={() => {
            // Handle adding to cart
          }}>Add to Cart</button>
  
          {/* Remove from cart button */}
          <button onClick={() => {
            // Handle removing from cart
          }}>Remove from Cart</button>
        </div>

        {/* Reviews */}
        <div>
            <h3>Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index}>
                <p>User: {review.userId}</p>
                <p>Description: {review.comment}</p>
                <p>Rating: {review.rating} stars</p>
              </div>
            ))}
          </div>
      </div>
    );
  };
  
  export default ProductDetail;
