import React from "react";
import "./styles/item.css";

const Items = ({ item, handleClick }) => {
  const { title, author, img, price, id } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="products" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>{"$" + price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Items;
