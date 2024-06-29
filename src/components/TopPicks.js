import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './TopPicks.css';
import EZRUNMAX5690SDG2motor from './1a.jpg';
import ERRUNMAX6G2ESE from './5a.jpg';
import A28400 from './28a.jpg';
import VEXVictorBB from './30a.jpg';

// Assuming you have a CartContext for managing cart state

const topPicks = [
  { name: 'EZRUN MAX 5690 SD G2', path: '/shop/esccontrollers', image: EZRUNMAX5690SDG2motor, price: '₹12513.67', rating: 4 },
  { name: 'ERRUN MAX 6 G2 ESE', path: '/product-2', image: ERRUNMAX6G2ESE, price: '₹12513.67', rating: 3.5 },
  { name: 'A28-400', path: '/product-3', image: A28400, price: '₹37459.06', rating: 4.5 },
  { name: 'VEX Victor BB', path: '/product-4', image: VEXVictorBB, price: '₹49973.22', rating: 4.5 },

];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="star" />
      ))}
      {halfStar && <FaStarHalfAlt className="star" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="star" />
      ))}
    </div>
  );
};

const TopPicks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Assuming addToCart function is provided by CartContext

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? topPicks.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === topPicks.length - 1 ? 0 : prevIndex + 1));
  };

  const handleAddToCart = (product, quantity) => {
    console.log("Added to cart:", product, "Quantity:", quantity);
  };

  const handleBuyNow = (product) => {
    console.log("Buy now:", product);
    // Implement your logic for buying now, e.g., redirect to checkout page
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="top-picks">
      <h2 className="section-title">OUR TOP PICKS</h2>
      <div className="products-container">
        <button className="nav-button prev" onClick={goToPrevious}>&#10094;</button>
        <div className="products">
          {topPicks.map((product, index) => (
            <div key={index} className={`toppicksproduct-card ${index === currentIndex ? 'active' : ''}`}>
              <Link to={product.path} className="product-link">
                <div className="toppicksproduct-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>

                  <div className="quantity-input">
                    <label htmlFor={`quantity-${index}`}>Quantity: </label>
                    <input
                      type="number"
                      id={`quantity-${index}`}
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              </Link>
              <div className="product-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
                <button className="buy-now-btn" onClick={() => handleBuyNow(product)}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={goToNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default TopPicks;
