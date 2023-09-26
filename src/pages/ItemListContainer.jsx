import { useParams } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';
import { getProductsByCategory } from '../firebase/products';
import { Loading } from '../components/Loading';
import { ItemList } from '../components/ItemList';


export const ItemListContainer = () => {

  const { categoryId } = useParams();

  const { isLoading, data, hasError} = useFirestore(getProductsByCategory, categoryId);

  if(isLoading) return <Loading/>
    
  return (
      <>
          <h4 className='text-center my-5 text-uppercase'>{ (!categoryId) ? 'All products' : categoryId  }</h4>
          <ItemList products={data}/>
      </>

  )
}
