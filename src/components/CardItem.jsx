import { Card, Button } from 'react-bootstrap';

export const CardItem = ({title, price, image, description}) => {
  
  // const {title, price, image, description} = item;
  return (
    <Card style={{ width: '18rem' }} className='m-2'>
      <Card.Img variant="top" src={ image } style={{ height: '60%', width: '90%' }} className = 'm-3'/>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>
         { price } $
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  )
}
