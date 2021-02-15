import React,{useState} from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import { toast } from "react-toastify"

function App() {
  const [cartItem,setCartItem] = useState([])
  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id
    })
    if(isAlreadyAdded!==-1) {
      toast("already added in cart",{
        type:"error"
      })
    }
    setCartItem([...cartItem,item])
  }

  const buyNow = () => {
    setCartItem([])
    toast("Purchase Complete",{type:"success"})
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => {singleItem.id !== item.id}))
  }
  return (
    <div></div>
  );
}

export default App;
