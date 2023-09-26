import { useState } from "react"
import { CustomIcon  } from "./Icons"
import { useAuth } from "../context/AuthContext";
import { addFavoriteProduct, deleteFavoriteProduct } from "../firebase/favorites";
import { favoriteProduct } from "../utils/favorites";

export const FavoriteBtn = ({ productId }) => {
  
  const { user, favorites } = useAuth();
  const product = favoriteProduct(productId, favorites) ;

  const [active, setActive ] = useState(product ? true: false);

  const handleActive = (e) => {
    e.stopPropagation();
    
    if(active) {
      deleteFavoriteProduct(product?.id)
    } else {
      addFavoriteProduct(productId, user?.uid)
    }
    setActive(!active)
  }

  
  return (
    <button 
      className='btn-favorite' 
      onClick={handleActive}>
        {
          <CustomIcon size={18} name={active ? "favorite-fill": "favorite"} color="#0bc1a9"/>
        }
    </button>
  )
}
