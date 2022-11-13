import React,{useState} from 'react'
import './styles/navbar.css'
import CartContainer from './CartContainer'


const Navbar = ({cart, setCart, handleChange}) => {
  const [gocart ,setGoCart] = useState(false)

const goToCart = () =>{
  setGoCart((prev) => !prev)
}


  return (
    
    <div className='nav_box'>
      <h1 className='title'>My Shopping</h1>
      <button onClick={goToCart} className='go-btn'>Go to Cart ({cart.length})</button>
      {gocart && <CartContainer cart={cart} setCart={setCart} id={cart.id} handleChange={handleChange}/>}
    </div>
    
  )
}

export default Navbar