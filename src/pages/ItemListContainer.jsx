import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Item } from '../components/Item';
import { useParams } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';
import { getProductsByCategory } from '../firebase/getData';
import { Loading } from '../components/Loading';
import { ItemList } from '../components/ItemList';


export const ItemListContainer = ({ greeting = 'Bienvenidos'}) => {

  const { categoryId } = useParams();

  const { isLoading, data, hasError} = useFirestore(getProductsByCategory, categoryId);

  if(isLoading) return <Loading/>
    
  return (
      <Container>
        <Col>
          <Row>
            <h4 className='text-center text-uppercase my-5'>{ (!categoryId) ? 'All products' : categoryId  }</h4>
          </Row>
          <ItemList products={data}/>
        </Col>
      </Container>

  )
}
