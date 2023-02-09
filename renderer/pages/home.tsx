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
import ChatRoom from '../components/Chat/ChatRoom';

const Home = () => {
	const { currentUser, setChatListData, setUserList, setTeamChatListData } =
		useCurrentUser();
	const { clickedUserUid } = useClickedUser();
	const router = useRouter();
	const [modalToogle, setModalToogle] = useState<boolean>(false);

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
				{clickedUserUid ? (
					<ChatRoom />
				) : (
					<section style={{ display: 'flex', fontSize: '30px' }}>
						🍒
						<br /> 친구 목록을 눌러서 채팅을 시작해보세요
					</section>
				)}
			</main>
		</>
	);
};

export default Home;
