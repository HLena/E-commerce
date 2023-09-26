import { 
    GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut,
    updateProfile
} from "firebase/auth";
import { 
    createContext, 
    useContext, 
    useEffect, 
    useState 
} from "react";
import { auth, db } from "../firebase/firebase";
import { ModalLy } from "../components/Modal";
import { Login } from "../auth/pages/Login";
import { Register } from "../auth/pages/Register";
import { collection, onSnapshot, query, where } from "firebase/firestore";


// Crea el contexto de autenticación
const AuthContext = createContext();

// Componente proveedor del contexto de autenticación
export const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState('login');
    const [favorites, setFavorites] = useState([]);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
          if (authUser) {
            setUser(authUser);
          } else {
            setUser(null);
          }
          setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
      
      if(user) {
        console.log('onSnapshot');
        const documents = query(collection(db, 'favorites'), where ("userId", "==", user.uid))
        
        const unsubscribe = onSnapshot(documents, (querySnapshot) => {
            const wishList = [];
            querySnapshot.forEach((doc) => {
                wishList.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setFavorites(wishList);
        });
       
        return () => unsubscribe();

      }
    }, [user])
    

    const registerUser = async({email, password, firstName, lastName}) => {

      try {
          
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          await updateProfile(auth.currentUser, {displayName:`${firstName} ${lastName}`})
          const {user} = userCredential;
          closeModal();
          window.location.href = "/";
          console.log('Register: ', user);
          
      } catch (error) {
          console.log(error);
          
      }
  
  }
  
  const signIn = async ({email, password}) => {
  
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const { user } = userCredential;
          window.location.href = "/";
          console.log('Login:', user);
  
      } catch(error){
          const { code, message } = error;
          console.log(code, message);
      };
  }
  
  const signInWithGoogle = async() => {
  
      const provider = new GoogleAuthProvider();
  
      try {
          const result = await signInWithPopup(auth, provider)
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
      }catch(error){
          console.log(error);
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
      };
  }
  
  const signOff = async() => {  
      try {
          await signOut (auth);
          window.location.href = "/";
      } catch (error) {
          console.log(error);
      }
  }
  
    

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            signIn,
            signInWithGoogle,
            signOff,
            closeModal,
            openModal,
            setForm,
            favorites
        }}>
            { !isLoading && children }

            <ModalLy 
                handleClose={closeModal} 
                show={isOpen}
                form = {form}
            >
                { 
                    form == 'login'
                        ? <Login/>
                        : <Register/>
                }
            </ModalLy>
        </AuthContext.Provider>
    )
}

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
}