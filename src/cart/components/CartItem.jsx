import { Image} from "react-bootstrap";
import { CustomIcon } from "../../components/Icons";
import { useCart } from "../../context/CartContext";
import { useNavigate} from "react-router-dom";

export const CartItem = ({ 
  image, 
  price, 
  title, 
  description,
  id, 
  quantity,
  priceWithDiscount,
  discount
 }) => {

  const { 
    deleteItem,
    removeItem,
    addItem
} = useCart();

  const navigate = useNavigate();

  const goTo = () => navigate(`/item/${id}`);
  
  return (
      <div 
        className = "p-2 shadow-sm p-2 bg-white rounded d-flex position-relative product-cart"
      >
        <div 
          className = "producto-image-container">
            <Image 
              src={image}  
              onClick = { goTo }
              role="button"
            />
        </div >
        <div className="product-details-container gap-3">
          <h6 onClick={ goTo } className="product-title">
            {title}
          </h6>
          <div className = "d-flex align-items-start producto-price-container" >
            <span>
            S/ {priceWithDiscount} 
            </span>
            <span className="text-body-tertiary text-decoration-line-through">S/ {price}</span>
            <small className="product-discount">{-discount}%</small>
          </div>
            <div className="counter"> 
              <button
                onClick={ () => removeItem(id)}
              >
                -
              </button>
              {quantity}
              <button
                onClick={ () => addItem(id)}
                >
                  +
              </button>
            </div>
            <span className="product-price-discount">
            S/ { Math.ceil(priceWithDiscount) * quantity }
            </span>
          <div
            className="mr-1 p-2 pointer position-absolute end-0 top-0" onClick = { () => deleteItem(id) }>
              <CustomIcon name="delete"/>
            </div>
        </div>
      </div>
  )
}
