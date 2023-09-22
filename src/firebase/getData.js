
import { db } from './firebase';
import { 
    collection, 
    query, 
    where, 
    getDocs, 
    doc, 
    getDoc
} from "firebase/firestore";

const getProductsByCategory = async (category) => {
    
    let documents;
    const data = [];
    if(!category) {
        documents = query(collection(db, "products"));
    } else {
        documents = query(collection(db, "products"), where("category", "==", category.toLowerCase()));
    }
    const querySnapshot = await getDocs(documents);
    querySnapshot.forEach((doc) => {
        const documento = doc.data();
        data.push({...documento, id: doc.id});
    });

    return data;
}

const getProductById = async (id) => {

    const docRef = doc(db, "products",id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            ...docSnap.data(),
            id: docSnap.id
        }
      } else {
        return null;
      }
}

export {
    getProductsByCategory,
    getProductById
}


