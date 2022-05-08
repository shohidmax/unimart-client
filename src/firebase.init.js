import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const env = process.env;
const firebaseConfig = {
  
  apiKey: env.REACT_APP_API_KEY,
  authDomain: env.REACT_APP_AUTH_DOMAIN,
  projectId: env.REACT_APP_PROJECT_ID,
  storageBucket: env.REACT_APP_STORAGE_BUKET,
  messagingSenderId: env.REACT_APP_MESSAGE_SENDER_ID,
  appId: env.REACT_APP_APP_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;