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
                  <div className = 'p-3  rounded d-grid gap-2  cart__purchase-summary justify-content-end'>
                      <div className="d-flex justify-content-between  w-40">
                          <h5 className='fw-bold'>Total</h5> 
                          <h5 className='fw-bold'>{totalPriceCart}$</h5>
                      </div>
                      <div className="d-flex gap-2 justify-content-end">
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
