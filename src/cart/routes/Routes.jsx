import { Navigate, Route, Routes } from "react-router-dom"
import { Cart } from "../pages/Cart"
import { Checkout } from "../pages/Checkout"
import { Payment } from "../pages/Payment"
import { Breadcrumb } from "../components/Breadcrumbs"

export const CartRoutes = () => {
  return (
    <>
        <div className="container">
            <Breadcrumb/>
            <Routes>
                <Route path = "" element = {<Cart/>}/>
                <Route path = "/checkout" element = { <Checkout/> }/>
                <Route path = "/payment" element = { <Payment/> }/>
                <Route path = "/*" element = { <Navigate to = "/"/> } />

            </Routes>
        </div>
    </>
  )
}
