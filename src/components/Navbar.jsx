import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import img from "../../public/logo.png"

const Navbar = () => {
    const {cart} = useSelector((state) => state);

  return(
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to='/'>
          <img alt="Logo" className="h-14 ml-5" src="./logo.png" />
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

          <NavLink to='/'>
            <p>Home</p>
          </NavLink>

          <NavLink to='/cart'>
            <div className="relative">
              <FaCartShopping className="text-2xl"/>

             {
             cart.length > 0 &&  
             <span 
                className="absolute -top-1 -right-2 bg-green-600 
                animate-bounce rounded-full h-5 w-5 flex items-center 
                justify-center text-white text-xs">
              {cart.length}
              </span>
             }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
