import { useCart } from "../../context/CartContext";
import { createOrder } from "../../firebase/postData";
import { CheckoutForm } from "../components/CheckoutForm";
import { PurchaseSummary } from "../components/PurchaseSummary";

export const Checkout = () => {
  const { 
      cartItems,
      totalPriceCart
  } = useCart();

  const generateOrder = (values) => {

    const currentDate = new Date();
    const newOrder = {
      // email: values.email,
      date: currentDate.toLocaleString(),
      state: 'generated',
      items: cartItems,
      totalPriceOrder: totalPriceCart
    } 
    createOrder(newOrder, values.email)
  }

  return (
    <div className="checkout-container">
      <CheckoutForm
        generateOrder =  {generateOrder}
      />
      <PurchaseSummary/>
    </div>
  )
}
