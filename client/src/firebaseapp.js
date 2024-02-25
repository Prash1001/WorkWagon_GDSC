import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqowirI_OjJJPUA120hnYbkIjllp1Ntrg",
  authDomain: "workwagon-ea1bc.firebaseapp.com",
  projectId: "workwagon-ea1bc",
  storageBucket: "workwagon-ea1bc.appspot.com",
  messagingSenderId: "376854047650",
  appId: "1:376854047650:web:9faf53772525cb4add60fb",
  measurementId: "G-HH496MDY4N",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);