import firebase, { firestore } from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAzIXcWwT0IQYTWIzyYKhgTAjbtvKJBJ3Y',
	authDomain: 'discord-clone-7037b.firebaseapp.com',
	databaseURL: 'https://discord-clone-7037b.firebaseio.com',
	projectId: 'discord-clone-7037b',
	storageBucket: 'discord-clone-7037b.appspot.com',
	messagingSenderId: '427908318052',
	appId: '1:427908318052:web:6627884bce4b8eafc43071',
	measurementId: 'G-959YPV6K7F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider =new firebase.auth.GoogleAuthProvider();


export {auth,provider};
export default db;