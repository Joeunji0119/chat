import { Props } from './types';

export const findChatUid = (currentUserUid: string, clickedUserUid: string) => {
	return currentUserUid > clickedUserUid
		? currentUserUid + clickedUserUid
		: clickedUserUid + currentUserUid;
};

export const findChatUserName = (currentUser: Props, userList: Props) => {
	const [user] =
		currentUser === undefined
			? ''
			: userList.filter(({ uid }: { uid: string }) => uid === currentUser.uid);
	return user;
};
