import { Button } from "react-bootstrap"
import { useCart } from "../context/CartContext";

export const Counter = ({quantity, setQuantity}) => {

  

    return (
        <div
            className="d-flex align-items-center justify-content-start"
            style={{ gap: ".5rem"}}
        >
            <Button
                className="counter-btn"
                variant="outline-primary" 
                onClick={() => setQuantity(
                    prevStatus => prevStatus == 1 
                        ? 1
                        : prevStatus - 1)}
                >
                -
            </Button>
                <span className="fs-5">{quantity}</span> 
            <Button 
                className="counter-btn"
                variant="outline-primary" 
                onClick={() => setQuantity(quantity + 1)}
                >
                +
            </Button>

        </div>
    )
}
