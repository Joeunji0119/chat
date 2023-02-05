/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ChattingUserInfo from './ChattingUserInfo';

const Message = () => {
	// const handleOwner = () => {
	//     state === me ? style={{flex-direction: "rowReverse}
	// }
	return (
		<div css={layout}>
			<ChattingUserInfo />
			<div style={{ marginTop: '20px' }}>
				<div css={messageLayout}>
					<div style={{ padding: '10px' }}>안녕하세요 ㅎggggggㅎ</div>
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
