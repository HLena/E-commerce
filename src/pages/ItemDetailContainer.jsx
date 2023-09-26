import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext";
import { getProductById } from "../firebase/products";
import {useFirestore} from "../hooks/useFirestore";
import { ItemDetail } from "../components/ItemDetail";
import { Loading } from "../components/Loading";
import { NotFound } from "../components/NotFound";

export const ItemDetailContainer = () => {

  const { itemId } = useParams();
  const { data, isLoading, error } = useFirestore(getProductById, itemId);
  
  const { 
    addItem,
    getQuantityItemById
  } = useCart();
  
  const quantityItem = getQuantityItemById(itemId);
  
  return (
    <>
      {
        (isLoading)
          ? <Loading/>
          : (!isLoading && !data)
            ? <NotFound/>
            : <ItemDetail 
                data={data}
                quantityItem={quantityItem}
                addItem={addItem}
              />
      }
    </>
  )
}
