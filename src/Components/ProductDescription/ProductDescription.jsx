import { useState } from "react";
import Minus from "../../assets/icons/icon-minus.svg";
import Plus from "../../assets/icons/icon-plus.svg";
import Cart from "../../assets/icons/icon-cart.svg";
import "../ProductDescription/ProductDescription.css";

function ProductDescription() {
  const [productQuantity, setProductQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    if (productQuantity > 0) {
      const newItem = {
        productName: "Fall Limited Edition Sneakers",
        price: 125.00,
        quantity: productQuantity,
      };
      setCartItems([...cartItems, newItem]);
      // Clear the product quantity after adding to cart
      setProductQuantity(0);
    }
  };

  const clearItem = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };
  
  return (
    <div className="product-description">
      <h4 className="company-name">Sneaker Company</h4>
      <h1 className="product-name">
        Fall Limited Edition <br /> Sneakers
      </h1>
      <p>
        These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.
      </p>

      <div className="description">
        <h4 className="price">$125.00</h4>
        <div className="discount-bg">
          <span className="discount">50%</span>
        </div>
      </div>
      <b className="original-price">$250.00</b>

      <div className="counter">
        <div className="controls">
          <button
            onClick={() => productQuantity > 0 && setProductQuantity(productQuantity - 1)}
          >
            <img src={Minus} alt="Minus" />
          </button>
          <div>{productQuantity}</div>
          <button onClick={() => setProductQuantity(productQuantity + 1)}>
            <img src={Plus} alt="Plus" />
          </button>
        </div>
        <button className="btn" onClick={addToCart}>
          <img className="Cart" src={Cart} alt="Cart" />
          <span>Add to Cart</span>
        </button>
      </div>

      <div className="cart-container">
        <h3>Shopping Cart</h3>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="product-info">
                <span className="product-name">{item.productName}</span>
                <span className="product-price">${item.price}</span>
                <span className="product-quantity">Quantity: {item.quantity}</span>
              </div>
              <button className="clear-button" onClick={() => clearItem(index)}>Clear</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default ProductDescription;