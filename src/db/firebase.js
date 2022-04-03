import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINSEMDERID,
  appId: process.env.APPID
}

const app = initializeApp(firebaseConfig);

export const getStore = () => {
  return app;
};