/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ChattingUserInfo from '../../../components/chat/ChattingUserInfo';
import Message from '../../../components/chat/Message';
import MessageInput from '../../../components/chat/MessageInput';
import { themeProps } from '../../../constants/types';
import { flexCenter } from '../../../shared/variableStyle';

const ChatRoom = () => {
	const [message, setMessage] = useState([]);

	// useEffect(() => {
	// 	const unSub = onSnapshot(doc(db,"chats",data))
	// }, []);

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
			</div>
			<MessageInput />
		</section>
	);
};

const layout = (theme: themeProps) => css`
	height: 85vh;
	width: 70vw;
	margin: 3%;
	border-radius: 20px;
	background: ${theme.grey};
`;

const chatInfo = css`
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
