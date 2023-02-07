import {
	collection,
	doc,
	DocumentData,
	getDocs,
	onSnapshot,
} from 'firebase/firestore';

import { db } from '../firebase';

export const getUserInfo = {
	GETUSERLIST: async (setUserList: (arg0: DocumentData[]) => void) => {
		const userListData: DocumentData[] = [];

		const querySnapshot = await getDocs(collection(db, 'users'));
		querySnapshot.forEach(doc => {
			userListData.push(doc.data());
		});
		setUserList(userListData);
	},
	GETCHATLIST: async (
		currentUser: { uid: string },
		setChatListData: (arg0: DocumentData) => void
	) => {
		onSnapshot(doc(db, 'userChats', currentUser?.uid), doc => {
			setChatListData(doc.data());
		});
	},
};
