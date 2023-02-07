import React, { useEffect } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { useCurrentUser } from '../components/contexts/ContextWrapper';
import Sider from '../components/common/Sider';
import ChatRoom from './chat/[id]/ChatRoom';
import { getUserInfo } from '../api/getUserInfo';

const Home = () => {
	const { currentUser, setChatListData, setUserList, chatListData } =
		useCurrentUser();
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
			<div style={{ display: 'flex', marginTop: '50px' }}>
				<Sider />
				<ChatRoom />
			</div>
		</>
	);
};

export default Home;
