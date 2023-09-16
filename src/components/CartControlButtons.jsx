import { Button } from "react-bootstrap"
import { useCart } from "../context/CartContext";

export const CartControlButtons = ({ item, quantityItem }) => {

    const {
        id,
    } = item;
      
    const {
        addItem,
        removeItem,
    } = useCart();


    return (
        <div
            className="d-flex align-items-center justify-content-start"
            style={{ gap: ".5rem"}}
        >
            <Button
                variant="outline-primary" 
                onClick={() => removeItem(id)}
            >
                -
            </Button>
            <div>
                <span className="fs-5">{quantityItem} in cart </span> 
            </div>
            <Button 
                variant="outline-primary" 
                onClick={() => addItem(id, item)}
            >
                +
            </Button>

        </div>
    )
}
