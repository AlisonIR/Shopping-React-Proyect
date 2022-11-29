import React from "react";
import data from "../data";
import Items from "./Items";

const ListofItems = ({ handleClick }) => {
  return (
    <section>
      {data.map((item) => {
        return <Items key={item.id} item={item} handleClick={handleClick} />;
      })}
    </section>
  );
};

export default ListofItems;
