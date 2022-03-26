// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyD0mARqXeHvPasy2hr3vhpb93bUCTRLdJg",
  authDomain: "fileupload-d3355.firebaseapp.com",
  projectId: "fileupload-d3355",
  storageBucket: "fileupload-d3355.appspot.com",
  messagingSenderId: "517705097645",
  appId: "1:517705097645:web:541d6b0054799f017f0124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();


export {db};