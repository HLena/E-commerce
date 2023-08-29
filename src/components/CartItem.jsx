import { Image, Button } from "react-bootstrap";
import { DeleteIcon } from "./Icons";
import { useCart } from "../context/CartContext";
import { useNavigate, Link} from "react-router-dom";

export const CartItem = ({ 
  image, 
  price, 
  title, 
  description,
  id, 
  quantity,
 }) => {

  const { 
    deleteItem,
    removeItem,
    addItem
} = useCart();

  const navigate = useNavigate();

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
          className = "d-flex align-items-center justify-content-center cart-item__image"
          style = {{ background: 'white'}}>
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
        <div className = "d-flex align-items-center " >
          <p className="fst-italic fs-6 p-1 m-0 text-body-tertiary">
            {price} $
          </p>
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
          
        </div>
      </div>
  )
}
