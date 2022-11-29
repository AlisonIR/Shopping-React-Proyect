import React,{useState} from 'react'
import './styles/navbar.css'
import CartContainer from './CartContainer'
import {FaShoppingCart} from 'react-icons/fa'




const Navbar = ({cart, setCart, handleChange}) => {
  const [gocart ,setGoCart] = useState(false)

const goToCart = () =>{
  setGoCart((prev) => !prev)
}


  return (
    
    <div className='nav_box'>
      <h1 className='title'>19th Century Bookstore</h1>
      <button onClick={goToCart} className='go-btn'>
      <FaShoppingCart size="1.2rem" className='cart-icon'/>
      <span className='items-amount'>{cart.length}</span>
      </button>
      {gocart && <CartContainer cart={cart} setCart={setCart} id={cart.id} handleChange={handleChange}/>}
    </div>
    
  )
}

export default Navbar