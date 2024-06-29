import React, { useContext, useState } from 'react';
import './ProductCard.css';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    if (!user || !user._id) {
      setError('Please log in to add items to your cart.');
      return;
    }
    try {
      await addToCart(product._id, quantity);
      alert('Item added to cart');
      setAdded(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleBuyNow = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.post('http://localhost:5000/api/buy', {
        productId: product._id,
        quantity: 1,
        userId: user._id,
        totalAmount: product.basePrice,
        address: 'chennai', // Replace with actual address
      });

      const data = response.data;
      navigate('/order-confirmation', { state: { order: data.order } });
    } catch (error) {
      console.error('Error making purchase:', error);
    }
  };

  const baseUrl = 'http://localhost:5000/';
  const handleCardClick = () => {
    const id = product._id;
    navigate(`/product/${id}`);
  };

  const imageUrl = product.images && product.images.length > 0
    ? `${baseUrl}${product.images[0].replace('\\', '/')}`
    : 'https://via.placeholder.com/150';

  return (
    <div className="cardproduct-card" onClick={handleCardClick}>
      <div className="product-image-container">
        <img src={imageUrl} alt={product.name} className="product-image" />
        <div className="overlay"></div>
      </div>
      <div className="cardproduct-info">
        <h3 className="name">{product.name}</h3>
        <p className="price">₹{product.basePrice}</p>
        <div className="quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            className="quantity-input"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            onClick={(e) => e.stopPropagation()} // Prevent click propagation
          />
        </div>
        <div className="button-container">
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <button
            className="buy-now-btn"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
