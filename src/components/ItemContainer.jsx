import React from "react";
import data from "../data";
import Items from "./Items";

const ListofItems = ({ handleClick }) => {
  return (
    <div className="container mx-auto w-full">

      <div className="grid justify-items-center grid-cols-1 mt-10 mb-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => {
        return <Items key={item.id} item={item} handleClick={handleClick} />;
      })}
      </div>
      
    </div>
  );
};

export default ListofItems;
