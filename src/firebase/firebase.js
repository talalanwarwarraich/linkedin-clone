import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAcoqhCjH67A630BBzKjvKamVEA-19R3cE",
	authDomain: "linkedin-clone-38a37.firebaseapp.com",
	projectId: "linkedin-clone-38a37",
	storageBucket: "linkedin-clone-38a37.appspot.com",
	messagingSenderId: "705590699049",
	appId: "1:705590699049:web:cd447db3b1991dae806838",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
