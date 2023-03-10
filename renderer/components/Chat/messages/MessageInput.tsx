/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from 'antd';
import { Input } from 'antd';
import { flexCenter } from '../../../shared/variableStyle';

import { useState } from 'react';
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

import { v1 } from 'uuid';
import { useClickedUser, useCurrentUser } from '../../contexts/ContextWrapper';

const MessageInput = () => {
	const { currentUser } = useCurrentUser();
	const { chatUid } = useClickedUser();
	const [sendMessage, setSendMessage] = useState('');

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSendMessage(e.target.value);
	};

	const handleSendMessage = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (sendMessage === '') {
			return alert('내용을 입력하세요');
		}

		await updateDoc(doc(db, 'chats', chatUid), {
			messages: arrayUnion({
				id: v1(),
				text: sendMessage,
				sendId: currentUser.uid,
				date: Timestamp.now(),
			}),
		});
		setSendMessage('');
	};

	return (
		<form css={layout} onSubmit={handleSendMessage}>
			<Input
				value={sendMessage}
				css={inputLayout}
				showCount
				maxLength={300}
				onChange={onChange}
				placeholder='type Plz :)'
				allowClear={true}
			/>
			<Button type='primary' css={button} onClick={e => handleSendMessage(e)}>
				보내기
			</Button>
		</form>
	);
};

export default MessageInput;

const layout = css`
	${flexCenter.flex('row', 'center', 'flex-start')}
	padding: 3% 0;
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
