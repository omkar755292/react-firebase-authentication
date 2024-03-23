import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHNsc5FMgxfIePIdoXDNExDCslZv6MOjo",
  authDomain: "onkar-dev.firebaseapp.com",
  projectId: "onkar-dev",
  storageBucket: "onkar-dev.appspot.com",
  messagingSenderId: "63007506112",
  appId: "1:63007506112:web:1a1f317f5099ba3ba73725",
  measurementId: "G-EP742PYE0G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;