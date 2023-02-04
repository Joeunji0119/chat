/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Input } from 'antd';
const { TextArea } = Input;

const MessageInput = () => {
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		console.log('Change:', e.target.value);
	};
	return (
		<div css={layout}>
			<TextArea
				css={inputLayout}
				showCount
				maxLength={100}
				onChange={onChange}
				placeholder='type Plz :)'
			/>
			<Button type='primary' css={button}>
				보내기
			</Button>
		</div>
	);
};

export default MessageInput;

interface themeProps {
	[x: string]: string;
}

const layout = (theme: themeProps) => css`
	height: 20vh;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-bottom: 2%;
	border-top: 2px solid ${theme.grey2};
`;

const inputLayout = css`
	height: 60%;
	width: 80%;
`;

const button = css`
	height: 10vh;
	width: 10%;
`;
