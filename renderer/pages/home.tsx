import React from 'react';
import Head from 'next/head';
import { Layout } from 'antd';
import ChatRoom from '../components/ChatRoom';

const Home = () => {
	return (
		<>
			<Head>
				<title> Let's Chat 🍒 </title>
			</Head>
			<Layout style={{ padding: ' 24px 24px', height: '80vh' }}>
				<ChatRoom />
			</Layout>
		</>
	);
};

export default Home;
