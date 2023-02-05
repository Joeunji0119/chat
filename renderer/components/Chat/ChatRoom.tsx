/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flexCenter } from '../../shared/variableStyle';
import ChattingUserInfo from './ChattingUserInfo';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatRoom = () => {
	return (
		<section css={layout}>
			<div css={chatInfo}>
				<ChattingUserInfo />
				<div css={chatInfoWith}>and 1 others</div>
			</div>

			<div css={MessageContainer}>
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
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
	${flexCenter.flex('row', 'flex-start', 'center')}
	height: 8%;
	padding-left: 5%;
	border-radius: 8px;
`;

const MessageContainer = css`
	height: 70vh;
	padding: 5%;
	overflow: scroll;
	${flexCenter.flex('column-reverse', '', '')}
`;

const chatInfoWith = css`
	padding-left: 2%;
`;

export default ChatRoom;
