import { Button, Container, Stack } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';

import '../assets/styles/cartPage.css'; 
import { useNavigate } from 'react-router-dom';

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
                ? <div className = 'cart__container d-flex gap-3' >
                    <div  className = 'cart__items my-3'>
                        <h3>Cart</h3>
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
                    <div className = 'my-3 cart__purchase-summary'>
                        <h3>Purchase summary</h3>

                        <div className="shadow-sm p-3 bg-white rounded d-grid gap-2">
                            <h5>{`Products(${quantityItems})`}</h5>
                            <h5>{`Total ${totalPriceCart}$`}</h5>
                            <Button >Continue shopping</Button>
                            <Button variant="link" onClick={clearCart}>Clean cart</Button>
                        </div>
                    </div>
                </div>
                : <div className = 'cart-empty__container'>

                            <h4>Your cart is empty</h4> 
                            <p>To continue shopping, browse the categories on the site, or search for your product.</p>
                            <Button onClick = { () => navigate('/')}>
                                Choose product
                            </Button>
                </div>
            }

        </Container>
  )
}
