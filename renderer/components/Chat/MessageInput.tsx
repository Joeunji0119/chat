/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { flexCenter } from '../../shared/variableStyle';
const { TextArea } = Input;

const MessageInput = () => {
	const [sendMessage, setSendMessage] = useState('');
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSendMessage(e.target.value);
	};
	const handleSendMessage = () => {
		sendMessage === '' ? alert('내용을 입력하세요') : console.log(sendMessage),
			setSendMessage('');
	};
	return (
		<form css={layout}>
			<TextArea
				value={sendMessage}
				css={inputLayout}
				showCount
				maxLength={300}
				onChange={onChange}
				placeholder='type Plz :)'
				allowClear={true}
				autoSize={{ maxRows: 3 }}
				onPressEnter={handleSendMessage}
			/>
			<Button type='primary' css={button}>
				보내기
			</Button>
		</form>
	);
};

export default MessageInput;

interface themeProps {
	[x: string]: string;
}

const layout = (theme: themeProps) => css`
	${flexCenter.flex('row', 'center', 'flex-start')}
	height: 10vh;
	padding-bottom: 2%;
`;

const inputLayout = css`
	width: 70%;
	resize: none;
`;

const button = css`
	max-width: 80px;
	margin-left: 2%;
	padding-top: 2px;
`;
