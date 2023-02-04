/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Input } from 'antd';
import { flexCenter } from '../shared/variableStyle';
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
	${flexCenter.flex('row', 'space-evenly', 'center')}
	height: 20vh;
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
