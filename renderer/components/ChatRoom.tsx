import React from 'react';
import { theme } from 'antd';

const ChatRoom = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<>
			<div
				style={{
					padding: 24,
					margin: 0,
					minHeight: 480,
					background: colorBgContainer,
				}}>
				Content
			</div>
		</>
	);
};

export default ChatRoom;
