import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBNx6BW0iQLqvNpWP07RsBQqyFtdUnw33g",
    authDomain: "attachmentdocs-fbce6.firebaseapp.com",
    projectId: "attachmentdocs-fbce6",
    storageBucket: "attachmentdocs-fbce6.appspot.com",
    messagingSenderId: "622535397732",
    appId: "1:622535397732:web:93d6612d18ae1986b42a71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };