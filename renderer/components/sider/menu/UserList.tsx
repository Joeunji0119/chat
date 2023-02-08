/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import {
	findChatUid,
	findChatUserName,
} from '../../../constants/chatDataConvert';
import { convertListData, getMenu } from '../../../constants/menuDataConvert';
import { MenuItem } from '../../../constants/types';
import { db } from '../../../firebase';
import { useCurrentUser } from '../../contexts/ContextWrapper';
import { MenuInfo } from 'rc-menu/lib/interface';
import { MenuLayout } from '../Sider';

const UserList = () => {
	const { userList, currentUser } = useCurrentUser();

	const handleSelectUser = async (uid: MenuInfo) => {
		const clickedUserUid = uid.keyPath[0];
		const clickedUserName = uid.domEvent.currentTarget.innerText;
		const combinedId = findChatUid(currentUser.uid, clickedUserUid);
		const user = findChatUserName(currentUser, userList);

		try {
			const res = await getDoc(doc(db, 'chats', combinedId));

			if (!res.exists()) {
				await setDoc(doc(db, 'chats', combinedId), {
					message: '',
				});

				await updateDoc(doc(db, 'userChats', currentUser.uid), {
					[combinedId + '.userInfo']: {
						uid: clickedUserUid,
						displayName: clickedUserName,
					},
					[combinedId + '.date']: serverTimestamp(),
				});

				await updateDoc(doc(db, 'userChats', clickedUserUid), {
					[combinedId + '.userInfo']: {
						uid: currentUser.uid,
						displayName: user.displayName,
					},
					[combinedId + '.date']: serverTimestamp(),
				});
			}
		} catch (err) {
			console.log(err); 
		}
	};

	const userListMenu: MenuItem[] = [
		getMenu(
			'친구 목록',
			'userList',
			<UserOutlined />,
			convertListData(userList)
		),
	];

	return (
		<Menu
			mode='inline'
			css={MenuLayout}
			items={userListMenu}
			onClick={uid => handleSelectUser(uid)}
		/>
	);
};

export default UserList;
