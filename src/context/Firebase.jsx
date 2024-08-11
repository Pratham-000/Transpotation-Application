import { createContext, useContext , useEffect , useState} from 'react'
import { initializeApp } from "firebase/app";
import { getAuth ,
  createUserWithEmailAndPassword ,
   signInWithEmailAndPassword ,
    GoogleAuthProvider , 
    signInWithPopup,
    onAuthStateChanged,

   } from 'firebase/auth'
const FirebaseContext = createContext(null);


const firebaseConfig = {
    apiKey: "AIzaSyCQupicObqPxWehpS-XgatRkWJhwVzcOrM",
    authDomain: "transport-63a29.firebaseapp.com",
    projectId: "transport-63a29",
    storageBucket: "transport-63a29.appspot.com",
    messagingSenderId: "122665115055",
    appId: "1:122665115055:web:0a2bb0581e0cc2defaa35a"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
export const useFirebase = () => useContext(FirebaseContext);





export const FirebaseProvider = (props) =>
{ 
  const [user, setUser] = useState(null);

  useEffect(() =>{
    onAuthStateChanged(firebaseAuth , (user) => {
      if(user) setUser(user);
      else setUser(null);
    })
  },[])
  const signupUserWithEmailAndPassword= (email , password) =>
  {
    createUserWithEmailAndPassword(firebaseAuth , email , password);
  }

  const signInWithEmailAndPass = (email , password) =>
    {
      signInWithEmailAndPassword(firebaseAuth , email , password);
    } 

  const signinWthGoogle = ()=> signInWithPopup(firebaseAuth , googleProvider)

   const isLoggedIN = user ? true : false;
   return (
    
   <FirebaseContext.Provider value={{
    signupUserWithEmailAndPassword , 
    signInWithEmailAndPass , 
    signinWthGoogle ,
    isLoggedIN}}> 
    { props.children}
    </FirebaseContext.Provider>
   )
}