/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { messageProps, themeProps } from '../../../constants/types';
import { useCurrentUser } from '../../contexts/ContextWrapper';
import ChattingUserInfo from '../chattingUserInfo/ChattingUserInfo';

const Message = ({ message }: { message: messageProps }) => {
	const { currentUser } = useCurrentUser();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref.current.scrollIntoView({
			behavior: 'smooth',
		});
	}, [message]);

	const messageFromUser =
		currentUser !== null ? currentUser.uid === message.sendId : '';

	return (
		<div ref={ref} css={messageFromUser ? layoutRight : layoutLeft}>
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

const layoutRight = css`
	height: auto;
	margin-top: 1%;
	color: white;
	display: flex;
	flex-direction: row-reverse;
`;

const layoutLeft = css`
	height: auto;
	margin-top: 1%;
	color: white;
	display: flex;
	flex-direction: row;
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
