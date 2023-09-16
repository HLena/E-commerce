import { Image } from "react-bootstrap";
import { useCart } from "../../context/CartContext";

export const PurchaseSummary = () => {

    const { 
        cartItems,
        totalPriceCart
    } = useCart();

    return (
        <div className="item-container__wrapper item-container__summary">
            <h5>Resumen de compra</h5>
            {
                cartItems.map((
                    {
                        id,
                        title,
                        image,
                        price,
                        quantity
                    }
                ) => (
                    <div key={id} className="item-container">
                        <div className="image-container">
                            <Image src={image} style={{width: '80px'}} className="border rounded"/>
                            <span className="item-quantity">{quantity}</span>
                        </div>
                        <strong className="item-title">{title}</strong>
                        <span className="item-price">S/ {price}</span>
                    </div>
                ))
            }
            <hr />
            <div className="d-flex justify-content-between px-3"> <strong>Total</strong> <strong>S/ {totalPriceCart}</strong></div>
        </div>
    )
}
