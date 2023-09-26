import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../firebase/orders";
import { CheckoutForm } from "../components/CheckoutForm";
import { PurchaseSummary } from "../components/PurchaseSummary";

export const Checkout = () => {
  const { 
      cartItems,
      totalPriceCart,
      clearCart
  } = useCart();
  const navigate = useNavigate();

  const generateOrder = (values) => {
    console.log(values);

    const currentDate = new Date();
    const newOrder = {
      date: currentDate.toLocaleString(),
      state: 'generated',
      items: cartItems,
      totalPriceOrder: totalPriceCart
    }
    const order = createOrder(newOrder, values.email)
    if(order) {
      navigate('/cart/confirmation');
      clearCart();

    }
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
