import { listProps, Props, userListProps } from './types';

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

export function convertListData(data?: userListProps[]) {
	const list = data?.map(({ displayName, uid }) => {
		return { label: displayName, key: uid };
	});
	return list;
}

export const convertCheckBoxUserlist = (
	userList: listProps[],
	currentUser: listProps
) => {
	return userList.filter(({ uid }: { uid: string }) => uid !== currentUser.uid);
};
