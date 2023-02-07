import React, { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { getUserInfo } from '../../api/getUserInfo';
import { chatListConvert } from '../../constants/menuDataConvert';

export const UserCurrentContext = createContext(null);

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [userList, setUserList] = useState([]);
	const [chatListData, setChatListData] = useState(null);
	const chatList = chatListConvert(chatListData);

	console.log('현재 유저 정보', currentUser);
	console.log('유저 채팅 리스트', chatListData);
	console.log('친구 목록', userList);

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
			{children}
		</UserCurrentContext.Provider>
	);
};

export const useCurrentUser = () => useContext(UserCurrentContext);
