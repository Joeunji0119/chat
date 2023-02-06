// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCrXaQqJjQ1HsqlAGNNtKVTppec4JKXIXQ',
	authDomain: 'chat-b3a90.firebaseapp.com',
	projectId: 'chat-b3a90',
	storageBucket: 'chat-b3a90.appspot.com',
	messagingSenderId: '278369373781',
	appId: '1:278369373781:web:71ef64974e596054f0cedc',
	measurementId: 'G-3L54MLDERK',
};

// if (!firebase.apps.length) {
// 	firebase.initializeApp(firebaseConfig);
// }

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
