import { Navigate, Route, Routes } from "react-router-dom"
import { Cart } from "../pages/Cart"
import { Checkout } from "../pages/Checkout"
import { Confirmation } from "../pages/Confirmation"
import { Breadcrumb } from "../components/Breadcrumbs"
import { useCart } from "../../context/CartContext"

export const CartRoutes = () => {
  const { 
      quantityItems
  } = useCart();
  return (
        <div className="container">
          {
            quantityItems > 0 && <Breadcrumb/>
          }
            <Routes>
                <Route path = "" element = {<Cart/>}/>
                <Route path = "/checkout" element = { <Checkout/> }/>
                <Route path = "/confirmation" element = { <Confirmation/> }/>
                <Route path = "/*" element = { <Navigate to = "/"/> } />

            </Routes>
        </div>
  )
}
