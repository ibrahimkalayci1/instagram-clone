import { initializeApp } from "firebase/app";
import { getAuth, signOut, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
import toast from "react-hot-toast";
import { userHandle } from "utils";


const firebaseConfig = {
  apiKey: "AIzaSyCiiD16P9qf1Fvm97ET6UC4zkS5dDR5G3I",
  authDomain: "instagram-f5b3c.firebaseapp.com",
  projectId: "instagram-f5b3c",
  storageBucket: "instagram-f5b3c.firebasestorage.app",
  messagingSenderId: "836422821260",
  appId: "1:836422821260:web:e6116278447416163162a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

onAuthStateChanged(auth, async user => {

if (user) {
  const dbUser = await getDoc(doc(db,  "users",   user.uid ))
let data = {
  uid: user.uid,
  fullName: user.displayName,
  email: user.email,
  emailVerified: user.emailVerified,
  ...dbUser.data()
}
  userHandle(data)
}else {
  userHandle(false)
}
})


export const login = async (email, password) => {
  try {
  
 const response = await signInWithEmailAndPassword (auth, email, password) 
    return response
} catch (err) {
toast.error(err.code)
  }
}

export const getUserInfo = async uname => {
  const username = await getDoc(doc(db, "usernames", uname))
if (username.exists()) {
  return (await getDoc(doc(db, "users", username.data().user_id))).data()
} else {
  toast.error("Kullanıcı bulunamadı")

throw new Error("Kullanıcı bulunamadı")
} 

}





export const register = async ({email, password, full_name, username}) => {
try {
const user= await getDoc(doc(db, "usernames", username ))
  if (user.exists())  {
  toast.error(`${username}  kullanıcı adı alınmış `)
} else {
const response = await createUserWithEmailAndPassword(auth,email,password)
if (response.user) {


await setDoc(doc(db, "usernames", username), {
  user_id: response.user.uid
})

await setDoc(doc(db, "users", response.user.uid), {
fullName: full_name,
username: username,
followers: [],
following: [],
notifications: [],
website: "",
bio: "",
phoneNumber: "",
gender: "",
posts: 0
})

await updateProfile(auth.currentUser, {
  displayName: full_name
} ) 

return response.user
}
}
} catch (err) {
  toast.error(err.code)
}
}


export const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {    
        toast.error(err.code)
    }
}
