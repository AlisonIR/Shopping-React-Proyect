import React from "react";


const Items = ({ item, handleClick }) => {
  const { title, author, img, price, id } = item;

  return (
    <div className="grid justify-items-center" >
      <div className=" max-w-sm rounded overflow-hidden">
        <img src={img} alt="products" className="mt-5 w-[250px] h-[250px] transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300" />
       </div>
        <div className="text-center">
          <p className=" text-black text-lg font-medium">{title}</p>
          <p className="text-sm">{author}</p>
          <p className="font-bold text-lg mb-2">{"$" + price}</p>
          <button className="bg-[#ffad79] w-[90px] h-[30px] font-medium hover:bg-[#c65a16]"onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    
  );
};

export default Items;
