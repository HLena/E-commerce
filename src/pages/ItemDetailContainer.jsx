import { Col, Container, Row, Image, Button} from "react-bootstrap";
import { useParams } from "react-router-dom"
import { CartControlButtons } from "../components/CartControlButtons";
import { useCart } from "../context/CartContext";
import { getProductById } from "../firebase/getData";
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
