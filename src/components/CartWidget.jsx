import { Button } from "react-bootstrap"
import { useCart } from "../context/CartContext"
import { CartIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {

    const { quantityItems } = useCart();
    const navigate = useNavigate();

    const goToCart = () => navigate(`/cart`);
    

    return (

        <>
            {quantityItems > 0 && 
                <Button
                    onClick={goToCart}
                    style={{ width: "3rem", height: "3rem", position: "relative"}}

                    variant="outline-light"
                    className="rounded-circle me-4"
                >
                    <CartIcon/>

                    <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        top: "-0.5rem",
                        right: "-0.5rem",
                        transform: "translate(25%, 25%)",
                    }}
                    >
                    {quantityItems}
                    </div>
                </Button>
            }
        </> 
    )
}
