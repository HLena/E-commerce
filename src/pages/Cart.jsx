import { Button, Offcanvas, Stack } from "react-bootstrap"
import { CartItem } from "../components/CartItem"
import { useCart } from "../context/CartContext"

export const Cart = ({ isOpen }) => {


    return (
        <Offcanvas show = { isOpen } onHide = { () => {} } placement = "end" >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <hr/>
            <Offcanvas.Body>
                <Stack gap = { 3 }>
                    
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
