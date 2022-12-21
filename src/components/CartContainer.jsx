import React, { useEffect, useState } from "react";


const Cart = ({ cart, setCart, handleChange }) => {
  const { price } = cart;
  const [prices, setPrices] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrices(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="absolute top-[48px] left-0 w-full min-h-screen bg-gray-100 flex flex-col justify-center gap-4 ">
      {cart.map((item) => (
        <div className="container mx-auto ml-2 mt-5" key={item.id}>
          <div className="flex sm:container mx-auto sm:ml-[20px]">
            <img src={item.img} alt="" className="w-[50px] h-[60px] sm:w-[80px] sm:h-[80px]" />
            <p className="font-bold ml-2 text-sm mb-0">{item.title}</p>
          </div>

          <div className="flex ml-[60px] space-x-2 font-medium -mt-6 sm:ml-[650px]">
            <button onClick={() => handleChange(item, 1)} className="bg-gray-300 font-bold w-5">+</button>
            <button className="bg-gray-300 w-5">{item.amount}</button>
            <button onClick={() => handleChange(item, -1)} className="bg-gray-300 font-bold w-5">-</button>
          </div>

          <div className="flex justify-center -mt-6 sm:ml-[750px]">
            <span className="font-bold ml-[180px] -mb-[100px]">{"$" + item.price}</span>
            <button className="bg-[#ffad79] ml-2" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      
      <div className="font-bold text-lg ml-10 mt-10 mb-3  sm:ml-[500px]">
        <span >Total Price of your Cart</span>
        <span className="bg-green-300 ml-5  ">${prices}</span>
      </div>
    </article>
  );
};

export default Cart;
