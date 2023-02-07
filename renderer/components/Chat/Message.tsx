/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { messageProps } from '../../constants/types';
import { useClickedUser } from '../contexts/ContextWrapper';
import ChattingUserInfo from './ChattingUserInfo';

const Message = ({ message }: { message: messageProps }) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref.current.scrollIntoView({
			behavior: 'smooth',
		});
	}, [message]);

	return (
		<div ref={ref} css={layout}>
			<ChattingUserInfo />
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
	[x: string]: string;
}

const layout = css`
	height: auto;
	margin-top: 1%;
	color: white;
	display: flex;
	flex-direction: row-reverse;
	//이거 건드리면 됨
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
