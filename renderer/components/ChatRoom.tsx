/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatRoom = () => {
	return (
		<section css={layout}>
			<div css={chatInfo}>chat with eunji</div>
			<div css={MessageContainer}>
				<Message />
				<Message />
				<Message />
			</div>
			<MessageInput />
		</section>
	);
};

interface themeProps {
	[x: string]: string;
}

const layout = (theme: themeProps) => css`
	height: 85vh;
	width: 70vw;
	margin: 3%;
	border-radius: 20px;
	background: ${theme.grey};
`;

const chatInfo = (theme: themeProps) => css`
	height: 8%;
	background: ${theme.blue};
	display: flex;
	align-items: center;
	padding-left: 5%;
	border-radius: 20px 20px 0 0;
`;

const MessageContainer = css`
	height: 60vh;
	padding: 5%;
`;

export default ChatRoom;
