/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { userName } from './ChattingUserInfo';
import Message from './Message';
import MessageInput from './MessageInput';
import { messageProps, themeProps } from '../../constants/types';
import { flexCenter } from '../../shared/variableStyle';
import { useClickedUser, useCurrentUser } from '../contexts/ContextWrapper';
import { getChatInfo } from '../../api/getChatInfo';

const ChatRoom = () => {
	const [messages, setMessages] = useState<messageProps[]>(null);
	const { clickedUserUid, chatUid } = useClickedUser();

	useEffect(() => {
		getChatInfo.GETMESSAGES(chatUid, setMessages);
	}, [clickedUserUid]);

	console.log(messages);

	return (
		<section css={layout}>
			<div css={chatInfo}>
				<input
					value={clickedUserUid?.domEvent?.target?.innerText}
					readOnly
					css={userName}
				/>
				<div css={chatInfoWith}>and 1 others</div>
			</div>
			<div css={MessageContainer}>
				{messages?.map((el: messageProps) => (
					<Message key={el.id} message={el} />
				))}
			</div>
			<MessageInput />
		</section>
	);
};

const layout = (theme: themeProps) => css`
	height: 85vh;
	width: 60vw;
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
	${flexCenter.flex('column', '', '')}
`;

const chatInfoWith = css`
	padding-left: 2%;
`;

export default ChatRoom;
