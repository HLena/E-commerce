import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const createOrder = async (data, email) =>  {
    try {
        const docRef = collection(db, `orders/${email}/orders`);
        await addDoc(docRef, data);
        console.log("Orden creada correctamente", docRef.id);
        return docRef.id
    } catch (error) {
        console.log('Error al crear orden', error);
        return null
    }

}

const getOrderList = async(email) => {
    try {
        const data = []
        const collecRef = collection(db, `orders/${email}/orders`);
        const querySnapshot = await getDocs(collecRef);
        
        querySnapshot.forEach((doc) => {
            const documento = doc.data();
            data.push({...documento, id: doc.id});
        });
    
        return data;
        
    } catch (error) {
        console.log(error);
    }
}

export{
    createOrder,
    getOrderList
}