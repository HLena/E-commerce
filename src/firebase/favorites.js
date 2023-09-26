import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const addFavoriteProduct = async (productId,userId) => {
    try {
            await addDoc(collection(db, "favorites"),
                { 
                    userId: userId, 
                    productId: productId
                }
            )
                
    } catch (error) {
        
        console.log('Error al agregar productos favoritos', error);
    }
}

const deleteFavoriteProduct = async (favoriteId) => {
    try {
        await deleteDoc(doc(db, "favorites", favoriteId));        
        console.log('Producto favorito eliminado correctamente');
    } catch (error) {
        
        console.log('Error al eliminar productos favoritos', error);
    }
}

const getFavoriteList = async (userId) => {
    try {
        const data = [];
        const documents = query(collection(db, 'favorites'), where ("userId", "==", userId))
    
        const querySnapshot = await getDocs(documents);
        querySnapshot.forEach((doc) => {
            const documento = doc.data();
            data.push({...documento, id: doc.id});
        });
     
        return data;
        
    } catch (error) {
        console.log(error);
    }
}

export {
    addFavoriteProduct,
    deleteFavoriteProduct,
    getFavoriteList
}