import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Item } from '../components/Item';
import { useParams } from 'react-router-dom';
import { URL_API } from '../utils/constants';
import { useFetch } from '../hooks/useFetch';


export const ItemListContainer = ({ greeting = 'Bienvenidos'}) => {

  const { categoryId } = useParams();

  const url = (!categoryId) ?  URL_API : `${URL_API}/category/${categoryId}`
  
  const { isLoading, data, hasError} = useFetch(url);

    
  return (
      <Container>
        <Col>
          <Row>
            {/* <h3 className='text-center text-uppercase m-2'>{ greeting } </h3> */}
            <h4 className='text-center text-uppercase my-5'>{ (!categoryId) ? 'All products' : categoryId  }</h4>
          </Row>
          <Row className='d-flex flex-wrap justify-content-around'>
            {
              isLoading 
                ?  <Spinner animation="border" variant="info" />
                : data.map((item) => <Item key = {item.id}  { ...item } />)
            }
          </Row>
        </Col>
      </Container>

  )
}
