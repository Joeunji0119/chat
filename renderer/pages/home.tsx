import React, { useEffect } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import {
	useClickedUser,
	useCurrentUser,
} from '../components/contexts/ContextWrapper';
import { getUserInfo } from '../api/getUserInfo';
import ChatRoom from '../components/chat/ChatRoom';
import Sider from '../components/common/Sider';

const Home = () => {
	const { currentUser, setChatListData, setUserList } = useCurrentUser();
	const { clickedUserUid } = useClickedUser();
	const router = useRouter();

	useEffect(() => {
		const protectedRoute = () => {
			if (!currentUser) {
				alert('plz, signin'), router.push('/auth');
			}
		};
		const handleGetChatList = () =>
			getUserInfo.GETCHATLIST(currentUser, setChatListData);

		const handleGetUserList = () => getUserInfo.GETUSERLIST(setUserList);

		protectedRoute();
		handleGetUserList();
		handleGetChatList();
	}, []);

	return (
		<>
			<Head>
				<title> Let's Chat 🍒 </title>
			</Head>
			<div style={{ display: 'flex', marginTop: '70px' }}>
				<Sider />
				{clickedUserUid && <ChatRoom />}
			</div>
		</>
	);
};

export default Home;
