import React, { useState } from 'react';
import { Menu } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import {
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useClickedUser, useCurrentUser } from '../contexts/ContextWrapper';
import { MenuItem } from '../../constants/types';
import { convertListData, getMenu } from '../../constants/menuDataConvert';
import { findChatUid, findChatUserName } from '../../constants/chatDataConvert';

const Sider = () => {
	const { userList, currentUser, chatList } = useCurrentUser();
	const { setClikedUserUid } = useClickedUser();

	const handleSelectUser = async (uid: MenuInfo) => {
		const clickedUserUid = uid.keyPath[0];
		const clickedUserName = uid.domEvent.currentTarget.innerText;
		const combinedId = findChatUid(currentUser.uid, clickedUserUid);
		const user = findChatUserName(currentUser, userList);

		try {
			const res = await getDoc(doc(db, 'chats', combinedId));

			if (!res.exists()) {
				await setDoc(doc(db, 'chats', combinedId), {
					message: '',
				});

				await updateDoc(doc(db, 'userChats', currentUser.uid), {
					[combinedId + '.userInfo']: {
						uid: clickedUserUid,
						displayName: clickedUserName,
					},
					[combinedId + '.date']: serverTimestamp(),
				});

				console.log('시작');

				await updateDoc(doc(db, 'userChats', clickedUserUid), {
					[combinedId + '.userInfo']: {
						uid: currentUser.uid,
						displayName: user.displayName,
					},
					[combinedId + '.date']: serverTimestamp(),
				});

				console.log('끝');
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleSelectChat = (uid: MenuInfo) => {
		setClikedUserUid(uid);
		console.log(uid.domEvent.currentTarget.innerText);
	};

	const userListMenu: MenuItem[] = [
		getMenu(
			'친구 목록',
			'userList',
			<UserOutlined />,
			convertListData(userList)
		),
	];

	const chatListMenu = [
		getMenu(
			'개인 채팅',
			'userChat',
			<TeamOutlined />,
			convertListData(chatList)
		),
	];

	const teamChatListMenu = [getMenu('단체 채팅', 'sub3', <TeamOutlined />, [])];

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '30vw',
				margin: '30px',
			}}>
			<Menu
				mode='inline'
				defaultSelectedKeys={['0']}
				defaultOpenKeys={['sub1']}
				style={{ borderRight: 0 }}
				items={userListMenu}
				onClick={uid => handleSelectUser(uid)}
			/>
			<Menu
				mode='inline'
				defaultSelectedKeys={['0']}
				defaultOpenKeys={['sub2']}
				style={{ borderRight: 0 }}
				items={chatListMenu}
				onClick={uid => handleSelectChat(uid)}
			/>
			<Menu
				mode='inline'
				defaultSelectedKeys={['0']}
				defaultOpenKeys={['sub3']}
				style={{ borderRight: 0 }}
				items={teamChatListMenu}
				// onClick={uid => handleSelectUser(uid)}
			/>
		</div>
	);
};

export default Sider;
