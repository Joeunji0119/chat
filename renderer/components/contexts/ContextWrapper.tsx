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

	console.log('현재 유저 정보', currentUser);
	// console.log('유저 채팅 리스트 변환 전', chatListData);
	// console.log('유저 팀채팅 리스트 변환전', teamChatListData);

	console.log('유저 팀채팅 나와야하는 거', teamChatList);

	const [clickedUserUid, setClikedUserUid] = useState<MenuInfo>(null);
	console.log('clickedUserUid:', clickedUserUid);

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
