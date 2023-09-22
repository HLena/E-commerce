import { db, storage } from "./firebase";
import { collection, addDoc} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import products from '../data/products.json';


const createImage = async (path, nameFile) => {
    const type = 'image/webp';
    const blob = fetch(path)
    .then((response) => response.blob())
    .then((blob) => {
      return new File([blob], nameFile, { type });
    });
    return blob;
}


const uploadImageToFirebaseStorage = async (imageName) => {
    try {
        const refImage = ref( storage , `${imageName}.webp`);
        const path = `/src/assets/images/${imageName}.webp`;
        const archive = await createImage(path, `${imageName}.webp`);
        await uploadBytes(refImage, archive);
        const url = await getDownloadURL(ref(storage,`${imageName}.webp`));
        return url;
    } catch (error) {
        console.error('Error al subir la imagen a Firebase Storage:', error);

    }
}


const createProduct = async () => {
    let images_url;
    try {
        for (const product of products) {
            images_url = [];
            for (const image of product.images) {
                const imageUrl = await uploadImageToFirebaseStorage(image);
                images_url.push(imageUrl);
            }
            await addDoc(collection(db, "products"),
                {
                    ...product,
                    images: images_url
                }
            )
        }        
        // console.log('Datos agregados correctamente');
    } catch (error) {
        
        console.log('Error al agregar datos a Firestore', error);
    }
}

const createOrder = async (data, email) =>  {
    try {
        const docRef = collection(db, `orders/${email}/orders`);
        await addDoc(docRef, data);
        console.log("Orden creada correctamente", docRef.id);
    } catch (error) {
        console.log('Error al crear orden', error);
    }

}

export {
    createProduct,
    createOrder
}