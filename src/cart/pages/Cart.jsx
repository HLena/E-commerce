import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Button, Container, Stack } from "react-bootstrap";
import { CartItem } from "../components/CartItem";

import '../../assets/styles/cartPage.css'; 

export const Cart = () => {
  const { 
      cartItems, 
      totalPriceCart,
      clearCart,
      quantityItems
  } = useCart();

  const navigate = useNavigate();

  return (
      <Container >
          {
              (quantityItems > 0)
              ?  <>
                  <div className = 'cart__container d-flex gap-3' >
                      <div  className = 'cart__items my-3'>
                          <h4>Carrito <small>({quantityItems} productos)</small></h4>
                          <Stack gap={3} >
                              {
                                  cartItems.map(item => {
                                      return (
                                          <CartItem
                                            key={item.id} 
                                                {...item }
                                            />
                                  )})
                              }
                          </Stack>
                      </div>
                  </div>
                  <hr />
                  <div className = 'cart__purchase-summary'>
                      <div className="total-price__container">
                          <h5 className='fw-bold'>Total</h5> 
                          <h5 className='fw-bold'>S/ {totalPriceCart}</h5>
                      </div>
                      <div className="btn-checkout__container">
                          <Button 
                            className='btn btn-secondary fw-bold'
                            onClick={clearCart}
                          >
                            Vaciar carrito
                          </Button>
                          <Button 
                            className='fw-bold'
                            onClick = { () => navigate('/cart/checkout')}
                          >
                            Continuar al checkout
                          </Button>
                      </div>
                  </div>
              </>
              : <div className = 'cart-empty__container'>
                  <h4>Tu carrito está vacío</h4> 
                  <p>Para continuar comprando, selecciona una categoría, o busca por tu producto.</p>
                  <Button onClick = { () => navigate('/')}>
                      Elige un producto
                  </Button>
                </div>
          }

    </Container>
  )
};
