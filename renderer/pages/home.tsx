import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import {
	useClickedUser,
	useCurrentUser,
} from '../components/contexts/ContextWrapper';
import { getUserInfo } from '../api/getUserInfo';
import Sider from '../components/sider/Sider';
import TeamChatModal from '../components/sider/TeamChatModal';
import ChatRoom from '../components/chat/ChatRoom';
import HomeGuideContainer from '../components/HomeGuideContainer';

const Home = () => {
	const router = useRouter();
	const { clickedUserUid } = useClickedUser();
	const [modalToogle, setModalToogle] = useState<boolean>(false);
	const { currentUser, setChatListData, setUserList, setTeamChatListData } =
		useCurrentUser();

	useEffect(() => {
		const protectedRoute = () => {
			if (!currentUser) {
				alert('plz, signin'), router.push('/auth');
			}
		};
		const handleGetChatList = () =>
			getUserInfo.GETCHATLIST(currentUser, setChatListData);

		const handleGetTeamChatList = () =>
			getUserInfo.GETTEAMCHATLIST(currentUser, setTeamChatListData);

		const handleGetUserList = () => getUserInfo.GETUSERLIST(setUserList);

		protectedRoute();
		handleGetUserList();
		handleGetChatList();
		handleGetTeamChatList();
	}, []);

	return (
		<>
			<Head>
				<title> Let's Chat 🍒 </title>
			</Head>
			<main style={{ display: 'flex', marginTop: '70px' }}>
				<Sider setModalToogle={setModalToogle} />
				{modalToogle && <TeamChatModal setModalToogle={setModalToogle} />}
				{clickedUserUid ? <ChatRoom /> : <HomeGuideContainer />}
			</main>
		</>
	);
};

export default Home;
