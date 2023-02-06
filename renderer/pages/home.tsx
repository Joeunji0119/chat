import React, { useEffect } from 'react';
import Head from 'next/head';
import ChatRoom from './chat/[id]/ChatRoom';
import Sider from '../components/common/Sider';
import { useCurrentUser } from '../components/contexts/ContextWrapper';
import { useRouter } from 'next/router';

const Home = () => {
	const { currentUser } = useCurrentUser();
	const router = useRouter();

	useEffect(() => {
		const protectedRoute = () => {
			if (!currentUser) {
				alert('plz, signin'), router.push('/auth');
			}
		};
		protectedRoute();
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
