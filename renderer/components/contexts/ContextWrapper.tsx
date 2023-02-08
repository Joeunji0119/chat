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

	console.log('현재 유저 정보', currentUser);
	console.log('유저 채팅 리스트', chatListData);
	console.log('친구 목록', userList);

	const [clickedUserUid, setClikedUserUid] = useState<MenuInfo>(null);

	const chatUid =
		currentUser !== null && clickedUserUid !== null
			? findChatUid(currentUser.uid, clickedUserUid.key)
			: '';

	const [toogle, setToogle] = useState(false);

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
			}}>
			<ClickedUserContext.Provider
				value={{
					clickedUserUid,
					setClikedUserUid,
					chatUid,
					toogle,
					setToogle,
				}}>
				{children}
			</ClickedUserContext.Provider>
		</UserCurrentContext.Provider>
	);
};

export const useCurrentUser = () => useContext(UserCurrentContext);
export const useClickedUser = () => useContext(ClickedUserContext);
