import { def } from "@vue/shared";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { addDoc, collection,getDocs  } from "firebase/firestore"; 

var firebaseConfig = {
    apiKey: "AIzaSyCHVgcnwvFxvRmw1wz5QLNjvdNtf47VsGY",
  authDomain: "firstproj-c93e9.firebaseapp.com",
  databaseURL: "https://firstproj-c93e9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firstproj-c93e9",
  storageBucket: "firstproj-c93e9.appspot.com",
  messagingSenderId: "602669242828",
  appId: "1:602669242828:web:15fd05e4816c607e746569",
  measurementId: "G-B42XNJCF7H"
};
// Initialize Firebase
//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()

const employeesCollection = db.collection('employees')
export default firebase;
export {
 
    db,
    auth,
    getDocs ,addDoc, collection
}