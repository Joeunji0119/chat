import React from 'react';
import Head from 'next/head';
import ChatRoom from '../components/ChatRoom';

const Home = () => {
	return (
		<>
			<Head>
				<title> Let's Chat 🍒 </title>
			</Head>
			<ChatRoom />
		</>
	);
};

export default Home;
