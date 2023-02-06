import React, { useEffect, useState } from 'react';
import { Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useCurrentUser } from '../contexts/ContextWrapper';

// import ChattingUserInfo from '../chat/ChattingUserInfo';

type MenuItem = Required<MenuProps>['items'][number];

type getItemProp = {
	(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[]
	): MenuItem;
};

interface userListProps {
	[x: string]: string;
}

// function convertUserListData(data: userListProps[]) {
// 	const dataMap = data.map(
// 		({ uid, displayName }) => '(getItem(' + displayName + ',' + uid + '))'
// 	);
// 	const datas = dataMap.map(el => eval(el));
// 	console.log('datas', datas);
// 	return datas;
// }

const getItem: getItemProp = (label, key, icon?, children?) => {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
};

function convertListData(data: userListProps[]) {
	const list = data.map(({ displayName, uid }) => {
		return { label: displayName, key: uid };
	});
	return list;
}

const Sider = () => {
	const [userList, setUserList] = useState([]);
	const { currentUser } = useCurrentUser();

	const getUserList = async () => {
		const userListData: DocumentData[] = [];

		const querySnapshot = await getDocs(collection(db, 'users'));
		querySnapshot.forEach(doc => {
			userListData.push(doc.data());
		});
		setUserList(userListData);
	};

	useEffect(() => {
		getUserList();
	}, []);

	const siderMenu: MenuItem[] = [
		getItem(
			'친구 목록',
			'userList',
			<UserOutlined />,
			convertListData(userList)
		),
		getItem('개인 채팅', 'sub2', <TeamOutlined />, [
			{ label: 'Team d', key: '3' },
		]),
		getItem('단체 채팅', 'sub3', <TeamOutlined />, [
			getItem('Team e', '7'),
			getItem('Team w', '9'),
		]),
	];

	const handleUser = async (uid: MenuInfo) => {
		const clickedId = uid.keyPath[0];
		const combinedId = currentUser.uid + clickedId;
		const res = await getDocs(collection(db, 'chats'));
	};

	return (
		<div style={{ width: '30vw', margin: '3%' }}>
			<Menu
				mode='inline'
				defaultSelectedKeys={['0']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
				items={siderMenu}
				onClick={uid => handleUser(uid)}
			/>
		</div>
	);
};

export default Sider;
