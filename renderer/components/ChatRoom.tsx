import React from 'react';
import { theme } from 'antd';
import { Content } from 'antd/es/layout/layout';

const ChatRoom = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<>
			<Content
				style={{
					padding: 24,
					margin: 0,
					minHeight: 480,
					background: colorBgContainer,
				}}>
				Content
			</Content>
		</>
	);
};

export default ChatRoom;
