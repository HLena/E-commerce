import { Row } from "react-bootstrap"
import { Item } from "./Item"

export const ItemList = ({products}) => {
  return (
    <div className='products-container'>
    {
        products.map((item) => <Item key = {item.id}  { ...item } />)
    }
    </div>
  )
}
