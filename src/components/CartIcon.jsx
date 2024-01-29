import { CiShoppingBasket } from "react-icons/ci";

function CartIcon({cart}) {
  return (
              
       <div className="relative">
       <CiShoppingBasket className="text-2xl" />
       {cart.length > 0 &&(
       <span className="bg-red-500 text-white w-4 h-4 flex justify-center items-center rounded-full absolute -top-1 -right-2 text-xs">
        
       {cart.length}
       </span>
       )}
     </div>   
  )
}

export default CartIcon