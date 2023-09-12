import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Item = ({id, name, images, description, price}) => {
  
  const navigate = useNavigate();

  const goTo = () => {
    navigate(`/item/${id}`)
  }

  return (
    <Card 
      style={{ width: '15rem', cursor: 'pointer' }} 
      className='shadow-sm p-3 mb-5 bg-white rounded'
      onClick = { goTo }
    >
      <Card.Img 
        variant="top" 
        src = { images[0] } 
        style={{ height: '10rem', width: '10rem', alignSelf: 'center' }} 
        className = 'm-3'
      />
      <Card.Body>
        <Card.Title style={
            {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              textTransform: 'uppercase'
            }
          }>
            { name }
          </Card.Title>
        <Card.Text className='text-body-tertiary fs-5 fw-bolder'>{ price } $ </Card.Text>
        <Button variant="primary w-100">
          Buy
        </Button>
      </Card.Body>
    </Card>
  )
}
