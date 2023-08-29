import { Col, Container, Row, Image, Button} from "react-bootstrap";
import { useLocation } from "react-router-dom"
import { CartControlButtons } from "../components/CartControlButtons";
import { useCart } from "../context/CartContext";

export const ItemDetailContainer = () => {

  const { 
    state: {
      description,
      price,
      title,
      image,
      id
  }} = useLocation();

  const { 
    addItem,
    getQuantityItemById
} = useCart();

const quantityItem = getQuantityItemById(id);

  return (
    <Container style={{ background: 'white'}} className = "p-3 mt-3">
      <Row className="m-4">
        <Col>
          <Image src={image} style={{ width: '80%'}}/>
        </Col>
        <Col className="p-5">
          <h4>{title}</h4>
          <p>{ description }</p>

          <h3>{price} $</h3>
          <div className="d-flex w-100 justify-content-between gap-3" >
            {
              quantityItem > 0
              ? <CartControlButtons item = {{
                  quantityItem,
                  title,
                  price,
                  image,
                  id,
                }}/>
              : <Button 
                  className="w-100"
                  onClick = { 
                      () => addItem(id, {
                        title, price, image, description
                    })}
                > 
                  Add to cart 
                </Button>
            }
          </div>


        </Col>
      </Row>
    </Container>
  )
}
