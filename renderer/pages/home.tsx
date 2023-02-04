import React from 'react';
import Head from 'next/head';
import ChatRoom from '../components/ChatRoom';
import Sider from '../components/common/Sider';

const Home = () => {
	return (
		<>
			<Head>
				<title> Let's Chat 🍒 </title>
			</Head>
			<Sider />
			<ChatRoom />
		</>
	);
};

export default Home;
