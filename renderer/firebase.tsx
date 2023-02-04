// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyBbXSjZtQErA8EcKfTH7YZYWPbq_rF3ohE',
	authDomain: 'chat-server-44a7f.firebaseapp.com',
	projectId: 'chat-server-44a7f',
	storageBucket: 'chat-server-44a7f.appspot.com',
	messagingSenderId: '415185656045',
	appId: '1:415185656045:web:eeeb56291ecc314f2554e4',
	measurementId: 'G-J8Q3W8SY35',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// const analytics = getAnalytics(app);
