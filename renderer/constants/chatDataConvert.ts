export const findChatUid = (currentUserUid: string, clickedUserUid: string) => {
	return currentUserUid > clickedUserUid
		? currentUserUid + clickedUserUid
		: clickedUserUid + currentUserUid;
};
