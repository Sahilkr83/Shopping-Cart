import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { removeAll } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0)
  const dispatch = useDispatch();

  useEffect(() =>{
    setTotalAmount( cart.reduce((acc, curr) => acc + curr.price ,0 ))
  },[cart])

  const clearCart = () => {
    dispatch(removeAll());
    toast.success('Order placed')
  }

  return (
    <div>
      {
        cart.length > 0 ?
        (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">

          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {
              cart.map((item,index) =>{
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            } 
          </div>
          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5">
              <div className="text-green-800 text-xl font-semibold">Your Cart</div>
              <div className="text-green-800 text-5xl font-semibold -mt-5">Summary</div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold">Total Items:</span> {cart.length}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="font-semibold text-gray-700">Total Amount :</span> ${totalAmount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg
              text-white transition duration-300 mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3
              text-xl ease-linear" onClick={clearCart} >Checkout Now</button>
            </div>
            </div>
          </div>


        </div>) : 

        (<div className="min-h-[80vh] flex flex-col items-center justify-center"> 
          <h1 className="text-gray-700 font-semibold text-xl mb-2"> Cart Empty </h1> 
          <Link to={'/'}>
          <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider"> Shop Now </button></Link></div>)
      }
    </div>
  );
};

export default Cart;
