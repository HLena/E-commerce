import { Accordion, Image } from "react-bootstrap"

export const OrderItem = ({order}) => {

    const {
        id,
        date,
        state,
        items,
        totalPriceOrder
    } = order
  return (
    <Accordion.Item eventKey={id} className=" border">
        <Accordion.Header>
            <div className="w-100 me-2">
                <p className="d-flex justify-content-between">
                    <strong>Código de compra</strong>
                    <span>{id}</span></p>
                <p className="d-flex justify-content-between">
                    <strong>Fecha de compra</strong>
                    <span>{date}</span></p>
                <p className="d-flex justify-content-between">
                    <strong>Estado</strong>
                    <span>{state && 'generado'}</span>
                </p>
            </div>
        </Accordion.Header>
        <Accordion.Body>
            <h4>Productos</h4>
            <hr />
            {
                items.map(item =>(
                    <div key={item.id} className="d-flex item-order-container">
                        <Image src={item.image} className="item-order-image"/>
                        <div className="item-order-details">
                            <strong>{item.title}</strong>
                            <span>{item.quantity}</span>
                            <span>S/{item.priceWithDiscount}</span>
                        </div>

                    </div>
                ))
            }
            <p className="d-flex justify-content-between mt-2">
                    <strong>Total</strong>
                    <span>S/ {totalPriceOrder}</span>
                </p>

        </Accordion.Body>

    </Accordion.Item>
  )
}
