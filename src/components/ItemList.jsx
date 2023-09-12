import { Row } from "react-bootstrap"
import { Item } from "./Item"

export const ItemList = ({products}) => {
  return (
    <Row className='d-flex flex-wrap justify-content-around'>
    {
        products.map((item) => <Item key = {item.id}  { ...item } />)
    }
    </Row>
  )
}
