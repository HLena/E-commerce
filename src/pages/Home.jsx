import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {useFirestore} from "../hooks/useFirestore";
import { getProductsByCategory } from "../firebase/products";
import { Loading } from "../components/Loading";
import { ItemList } from "../components/ItemList";

export const Home = () => {

    const { categoryId } = useParams();

    const { isLoading, data, hasError} = useFirestore(getProductsByCategory, categoryId);

    if(isLoading) return <Loading/>

    return (
        <Col>
          <Row>
            <h4 className='text-uppercase my-5 text-center'>{ (!categoryId) ? 'Todos los productos' : categoryId  }</h4>
          </Row>
          <ItemList products={data} />
        </Col>
    )
}
