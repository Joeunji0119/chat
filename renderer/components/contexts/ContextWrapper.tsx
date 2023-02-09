import React from 'react';
import { createContext, useContext, useState } from 'react';
import { chatListConvert } from '../../constants/menuDataConvert';
import { MenuInfo } from 'rc-menu/lib/interface';
import { findChatUid } from '../../constants/chatDataConvert';
import { listProps } from '../../constants/types';

export const UserCurrentContext = createContext(null);
export const ClickedUserContext = createContext(null);

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [userList, setUserList] = useState<listProps>();
	const [chatListData, setChatListData] = useState(null);
	const chatList = chatListConvert(chatListData);

	const [teamChatListData, setTeamChatListData] = useState(null);
	const teamChatList = chatListConvert(teamChatListData);

	const [clickedUserUid, setClikedUserUid] = useState<MenuInfo>(null);

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
					setClikedUserUid,
					chatUid,
				}}>
				{children}
			</ClickedUserContext.Provider>
		</UserCurrentContext.Provider>
	);
};

export const useCurrentUser = () => useContext(UserCurrentContext);
export const useClickedUser = () => useContext(ClickedUserContext);
