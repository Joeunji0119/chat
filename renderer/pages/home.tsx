import React from 'react';
import Head from 'next/head';
import ChatRoom from '../components/ChatRoom';

const Home = () => {
	return (
		<>
			<Head>
				<title> Let's Chat 🍒 </title>
			</Head>
			<div style={{ padding: ' 24px 24px', height: '80vh' }}>
				<ChatRoom />
			</div>
		</>
	);
};

export default Home;
