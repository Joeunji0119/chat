/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { send } from 'process';
import { useEffect, useRef } from 'react';
import { messageProps } from '../../constants/types';
import { useCurrentUser } from '../contexts/ContextWrapper';
import ChattingUserInfo from './ChattingUserInfo';

const Message = ({ message }: { message: messageProps }) => {
	const { currentUser } = useCurrentUser();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref.current.scrollIntoView({
			behavior: 'smooth',
		});
	}, [message]);

	const messageFromUser = currentUser.uid === message.sendId;

	console.log(message);

	return (
		<div ref={ref} id={message.sendId} css={layout({ messageFromUser })}>
			<ChattingUserInfo message={message} />
			<div style={{ marginTop: '20px' }}>
				<div css={messageLayout}>
					<div style={{ padding: '10px' }}>{message?.text}</div>
				</div>
			</div>
		</div>
	);
};

export default Message;

interface themeProps {
	[x: string]: string | boolean;
}

const layout = (messageFromUser: { messageFromUser: boolean }) => css`
	height: auto;
	margin-top: 1%;
	color: white;
	display: flex;
	flex-direction: ${messageFromUser ? 'row-reverse' : 'row'};
`;

const messageLayout = (theme: themeProps) => css`
	max-width: 60vh;
	min-width: 80px;
	margin: 0 20px;
	background: ${theme.grey3};
	color: black;
	word-break: break-all;
	border-radius: 10px 10px 0px 10px;
`;
