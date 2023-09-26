import { Accordion } from "react-bootstrap"
import { OrderItem } from "./OrderItem"

export const OrderList = ({orders}) => {
  return (
    <Accordion>

        {
            orders.map(order => <OrderItem key = {order.id} order = {order}/>)
                
        }
    </Accordion>
  )
}
