import React from 'react';
import cart from "./images/cart.jpg"
import './css/menu.css';
const Card = (props) => {
  return (
    <div className="menu-card">
      <img id='card-img' src={props.image} alt=""/>
      <div className="food-price">
        <p>&#8377; {props.price}</p>
      </div>
      <div className="food-description">
        <h1>{props.foodName}</h1>
        <p>{props.description}</p>
      </div>
      <img id='cart' src={cart} alt="cart"/>
      
    </div>
  );
}

export default Card;
