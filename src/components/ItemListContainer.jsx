import { Container, Spinner } from 'react-bootstrap';
import { CardItem } from './CardItem';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const url = `https://fakestoreapi.com/products/category/women's clothing?limit=20`;

export const ItemListContainer = ({ greeting = 'Items'}) => {


  // const [state, setState] = useState({
  //   data: null,
  //   isLoading: true,
  //   hasError: null
  // });

  const { isLoading, data, hasError} = useFetch(url);


  // useEffect(() => {
  //   getProductos()
  // }, []);

  // const getProductos = async() => {
  //   setState({
  //     ...state,
  //     isLoading: true,
  // });

  // const resp = await fetch(url);
  // const data = await resp.json();

  // setState({
  //     data,
  //     isLoading: false,
  //     hasError: null
  // })

  // }

  
    
  return (
    <Container>
      <h4 className='d-flex justify-content-center mt-2'>{ greeting }</h4>
      <Container className='d-flex flex-wrap justify-content-around'>
        {
          isLoading 
            ?  <Spinner animation="border" variant="info" />
            : data.map((item) => <CardItem key = {item.id}  { ...item } />)
        }
      </Container>

    </Container>
  )
}
