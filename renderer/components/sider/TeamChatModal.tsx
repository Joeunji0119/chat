/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ChangeEvent, useState } from 'react';
import {
	listProps,
	setModalToogleProps,
	themeProps,
} from '../../constants/types';
import { flexCenter } from '../../shared/variableStyle';
import { useCurrentUser } from '../contexts/ContextWrapper';
import { Input, Checkbox, Button, Space, Card } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { v1 } from 'uuid';

const TeamChatModal = ({ setModalToogle }: setModalToogleProps) => {
	const { userList, currentUser } = useCurrentUser();
	const [checkedList, setCheckedList] = useState<string[]>([]);
	const [teamChatName, setTeamChatName] = useState<string>('');

	const handleCheckbox = (e: CheckboxChangeEvent) => {
		if (e.target.checked) setCheckedList(prev => [...prev, e.target.id]);

		if (!e.target.checked && checkedList.includes(e.target.id))
			setCheckedList(checkedList.filter(el => el !== e.target.id));
	};

	const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTeamChatName(e.target.value);
	};

	const handleCloseModal = () => {
		setModalToogle(pre => !pre);
	};

	const handleSummit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (checkedList.length === 0 || teamChatName === '') {
			alert('단체방 이름과 채팅 유저 선택은 필수입니다.');
		}
		console.log('단체방', teamChatName, checkedList);

		// try {
		// 	const teamUid = v1()

		// 	for(let i=0;i<checkedList.length)
		// 	await setDoc(doc(db, 'teamChats', teamUid), {
		// 		message: '',
		// 	});
		// 	await updateDoc(doc(db, 'userChats', currentUser.uid), {
		// 		[teamUid + '.userInfo']: {
		// 			uid: checkedList[i],
		// 			displayName: teamChatName,
		// 		},
		// 		[teamUid + '.date']: serverTimestamp(),
		// 	});

		// } catch (err) {
		// 	console.log(err);
		// }
	};

	return (
		<section css={modalLayout}>
			<Space direction='vertical' size='middle' style={{ display: 'flex' }}>
				<Card title='단체 채팅' css={cardLayout}>
					<div css={checkBoxsContainer}>
						{userList?.map((el: listProps) => (
							<Checkbox
								key={el.uid}
								id={el.uid}
								onChange={e => handleCheckbox(e)}>
								{el.displayName}
							</Checkbox>
						))}
					</div>
					<Input
						placeholder='단체방 이름을 입력하세요'
						onChange={e => handleInputOnChange(e)}
					/>
					<div css={buttonContainer}>
						<Button
							css={modalButtonLayout}
							type='primary'
							onClick={e => handleSummit(e)}>
							만들기
						</Button>
						<Button onClick={handleCloseModal}>취소</Button>
					</div>
				</Card>
			</Space>
		</section>
	);
};

export default TeamChatModal;

const modalLayout = css`
	${flexCenter.absoluteCenter}
`;

const cardLayout = (theme: themeProps) => css`
	background: ${theme.grey};
	min-height: 300px;
`;

const checkBoxsContainer = css`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 40px;
	grid-gap: 5px;
	overflow-y: scroll;
	max-height: 500px;
	margin: 30px;
`;

const modalButtonLayout = css`
	margin-right: 5%;
`;

const buttonContainer = css`
	${flexCenter.flex('row', 'center', 'center')}
	padding-top: 20px;
`;
