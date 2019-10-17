import React from "react";
import "./Card.css";

const Card = props => {

  return (
    <div className="card">
      <img src={props.image} alt='' />
      <div className="card-body">
        <h2>Quote</h2>
        <p className="ludwig">
          {props.quote}
        </p>
        <h5>{props.author}</h5>
      </div>
    </div>
  );
};

export default Card;
