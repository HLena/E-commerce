import { Image } from "react-bootstrap";
import { useCart } from "../../context/CartContext";

export const PurchaseSummary = () => {

    const { 
        cartItems,
        totalPriceCart
    } = useCart();

    return (
        <div className="purchase-summary-container">
            <h5>Resumen de compra</h5>
            {
                cartItems.map((
                    {
                        id,
                        title,
                        image,
                        priceWithDiscount,
                        quantity
                    }
                ) => (
                    <div key={id} className="item-container">
                        <div className="image-container">
                            <Image src={image} style={{width: '80px'}} className="border rounded"/>
                            <span className="item-quantity">{quantity}</span>
                        </div>
                        <strong className="item-title">{title}</strong>
                        <span className="item-price">S/ {priceWithDiscount}</span>
                    </div>
                ))
            }
            <hr />
            <div className="d-flex justify-content-between px-3"> <strong>Total</strong> <strong>S/ {totalPriceCart}</strong></div>
        </div>
    )
}
