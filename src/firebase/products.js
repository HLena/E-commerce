
import { db, storage } from './firebase';
import { 
    collection, 
    query, 
    where, 
    getDocs, 
    doc, 
    getDoc
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

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


export {
    getProductsByCategory,
    getProductById,
    createProduct
}


