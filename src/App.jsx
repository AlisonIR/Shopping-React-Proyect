import React,{useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import ItemContainer from './components/ItemContainer'

const App = () => {
const [cart, setCart] = useState([])


  const handleClick = (item)=>{
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart, item])
    console.log(cart)
  }

  const handleChange = (item, d) =>{
   const ind = cart.indexOf(item);
   const arr = cart;
   arr[ind].amount += d;

   if(arr[ind].amount === 0) arr[ind].amount = 1;
   setCart([...arr]);

  }
  
  useEffect(() =>{
    console.log("cart change")
  }, [cart]);


  return (
    <div>
      <Navbar cart={cart} setCart={setCart} handleChange={handleChange}/>
      <ItemContainer handleClick={handleClick}/>
    </div>
  )
}

export default App