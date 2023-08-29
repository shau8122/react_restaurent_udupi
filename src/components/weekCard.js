import React from "react";

const WeekCard = (props) => {
  return (
    <div className="week-list-item">
      <div className="week-image">
        <img src={props.image} alt="" />
      </div>
      <div className="week-para">
        <h1>{props.foodName}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          asperiores!
        </p>
      </div>
      <div className="price-tag">
        <h1>&#8377; {props.price}</h1>
      </div>
    </div>
  );
};

export default WeekCard;
