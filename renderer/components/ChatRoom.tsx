/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flexCenter } from '../shared/variableStyle';
import ChattingUserInfo from './ChattingUserInfo';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatRoom = () => {
	return (
		<section css={layout}>
			<div css={chatInfo}>
				<div css={chatInfoWith}>Chatting with</div>
				<ChattingUserInfo />
				<div css={chatInfoWith}>and 1 others</div>
			</div>

			<div css={MessageContainer}>
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
	width: 80vw;
	margin: 3%;
	border-radius: 20px;
	background: ${theme.grey};
`;

const chatInfo = (theme: themeProps) => css`
	${flexCenter.flex('row', 'space-evenly', 'center')}
	height: 8%;
	background: ${theme.blue};
	padding-left: 5%;
	border-radius: 20px 20px 0 0;
`;

const MessageContainer = css`
	height: 60vh;
	padding: 5%;
	overflow: scroll;
	${flexCenter.flex('column-reverse', '', '')}
`;

const chatInfoWith = css`
	font-size: 20px;
	font-weight: 500;
`;

export default ChatRoom;
