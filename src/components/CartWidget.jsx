import { useCart } from "../context/CartContext"
import { CustomIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {

    const { quantityItems } = useCart();
    const navigate = useNavigate();

    const goToCart = () => navigate(`/cart`);
    

    return (
        <div
            onClick={goToCart}
            className="position-relative"
        >
            <CustomIcon name = "cart"/>
            {
                quantityItems > 0 && 
                    <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            width: "1.2rem",
                            height: "1.2rem",
                            position: "absolute",
                            top: "-0.5rem",
                            right: "-0.2rem",
                            transform: "translate(25%, 25%)",
                            fontSize: '12px',
                            fontWeight: 'bolder'
                        }}
                    >
                        {quantityItems}
                    </div>
            }
        </div>
    )
}
