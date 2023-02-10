import React from 'react';
import { createContext, useContext, useState } from 'react';
import { chatListConvert } from '../../constants/menuDataConvert';
import { MenuInfo } from 'rc-menu/lib/interface';
import { findChatUid } from '../../constants/chatDataConvert';
import { listProps } from '../../constants/types';
import { DocumentData } from 'firebase/firestore';

export const UserCurrentContext = createContext(null);
export const ClickedUserContext = createContext(null);

interface CurrentUserProp {
	uid: string;
}

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<CurrentUserProp>(null);
	const [userList, setUserList] = useState<listProps>(null);
	const [chatListData, setChatListData] = useState<DocumentData>([]);
	const chatList = chatListConvert(chatListData);

	const [teamChatListData, setTeamChatListData] = useState<DocumentData>([]);
	const teamChatList = chatListConvert(teamChatListData);

	const [clickedUserUid, setClickedUserUid] = useState<MenuInfo>(null);

	const chatUid =
		currentUser !== null && clickedUserUid !== null
			? chatList.map(({ uid }) => uid).includes(clickedUserUid.key)
				? findChatUid(currentUser.uid, clickedUserUid.key)
				: clickedUserUid.key
			: '';

	return (
		<UserCurrentContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				chatListData,
				setChatListData,
				userList,
				setUserList,
				chatList,
				teamChatListData,
				setTeamChatListData,
				teamChatList,
			}}>
			<ClickedUserContext.Provider
				value={{
					clickedUserUid,
					setClickedUserUid,
					chatUid,
				}}>
				{children}
			</ClickedUserContext.Provider>
		</UserCurrentContext.Provider>
	);
};

export const useCurrentUser = () => useContext(UserCurrentContext);
export const useClickedUser = () => useContext(ClickedUserContext);
