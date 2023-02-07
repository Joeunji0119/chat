import { doc, onSnapshot } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { messageProps } from '../constants/types';
import { db } from '../firebase';

export const getChatInfo = {
	GETMESSAGES: async (
		chatUid: string,
		setMessages: Dispatch<SetStateAction<messageProps[]>>
	) => {
		onSnapshot(doc(db, 'chats', chatUid), doc => {
			doc.exists() && setMessages(doc.data().messages);
		});
	},
};
