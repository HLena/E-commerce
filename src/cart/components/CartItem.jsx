import { Image, Button } from "react-bootstrap";
import { DeleteIcon } from "../../components/Icons";
import { useCart } from "../../context/CartContext";
import { useNavigate} from "react-router-dom";

export const CartItem = ({ 
  image, 
  price, 
  title, 
  description,
  id, 
  quantity,
  discount
 }) => {

  const { 
    deleteItem,
    removeItem,
    addItem
} = useCart();

  const navigate = useNavigate();

  const priceWithDiscount = price - ((price * discount) / 100);

  const goTo = () => {
    navigate(`/item/${id}`,{ state : {
      description,
      price,
      title,
      image,
      id
    }});
  }
  
  return (
      <div 
        className = "p-2 shadow-sm p-3 bg-white rounded cart-item d-flex"
      >
        <div 
          className = "d-flex align-items-center justify-content-center cart-item__image">
            <Image 
              src={image}  
              onClick = { goTo }
              role="button"
            />
        </div >
        <div className="d-flex cart-item__details ">
          <div  className = "d-flex cart-item__title" >
            <p onClick={ goTo } role="button">
              {title}
            </p>
          </div>
          <div className = "d-flex align-items-start cart-item__price" >
            <p className="fst-italic fs-6 m-0">
              {Math.ceil(priceWithDiscount)}$ <small className="discount-text">{-discount}%</small>
            </p>
            <small className="text-body-tertiary text-decoration-line-through">{price}$</small>
          </div>
          <div className="d-flex align-items-center" >
            <div className="d-flex justify-content-evenly align-items-center"> 
              <Button
                className="mx-2"
                variant="outline-primary"
                onClick={ () => removeItem(id)}
              >
                -
              </Button>
              {quantity}
              <Button
                className="mx-2"
                variant="outline-primary"
                onClick={ () => addItem(id)}
                >
                  +
              </Button>
              <Button className="mr-1" onClick = { () => deleteItem(id) }><DeleteIcon/></Button>
            </div>
          </div >
          <div className = "d-flex align-items-start cart-item__price" >
            <p className="fst-italic fs-6 m-0">
              { Math.ceil(priceWithDiscount) * quantity }$
            </p>
          </div>
        </div>
      </div>
  )
}
