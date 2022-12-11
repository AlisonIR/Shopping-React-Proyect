import React, { useState } from "react";
import CartContainer from "./CartContainer";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart, setCart, handleChange }) => {
  const [gocart, setGoCart] = useState(false);

  const goToCart = () => {
    setGoCart((prev) => !prev);
  };

  return (
    <div className="bg-[#ffad79] w-full h-12 flex justify-between">
      <h1 className="mt-1 ml-1 mr-[4px] font-bold text-white size text-[1.1rem] sm:text-[1.5rem]">19th Century Bookstore</h1>
      <button onClick={goToCart} className="flex mt-1 mr-2 mb-1 w-11 bg-[#fffaff] items-center hover:bg-[#c65a16] rounded-lg cursor-pointer">
        <FaShoppingCart size="1.2rem" className="ml-1.5" />
        <span className="ml-[5px] bg-red-600 rounded-full w-[10px] h-6">{cart.length}</span>
      </button>

      {gocart && (
        <CartContainer
          cart={cart}
          setCart={setCart}
          id={cart.id}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default Navbar;
