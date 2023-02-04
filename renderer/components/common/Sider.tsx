import React from 'react';
import { Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';

type MenuItem = Required<MenuProps>['items'][number];

type getItemProp = {
	(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[]
	): MenuItem;
};

function convertUserListData(data: any) {
	const dataMap = data.map(
		({ id, name }: any) => 'getItem(' + name + ',' + id + ')'
	);
	const datas = dataMap.map((el: any) => eval(`el=${el}`));
	console.log(datas);
	return datas;
}

const data = [
	{
		id: 1,
		name: 111,
	},
	{
		id: 2,
		name: 2222,
	},
	{
		id: 3,
		name: 3333,
	},
	{
		id: 4,
		name: 4444,
	},
	{
		id: 5,
		name: 999,
	},
];

const getItem: getItemProp = (label, key, icon?, children?) => {
	console.log(1111, key);
	return {
		key,
		icon,
		children,
		label: `${label}`,
	} as MenuItem;
};

const Sider = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const siderMenu: MenuItem[] = [
		getItem('친구 목록', 'sub1', <UserOutlined />, convertUserListData(data)),
		getItem('개인 채팅', 'sub2', <TeamOutlined />, [
			getItem('Team d', '3'),
			getItem('Team 2', '8'),
		]),
		getItem('단체 채팅', 'sub3', <TeamOutlined />, [
			getItem('Team e', '7'),
			getItem('Team w', '9'),
		]),
	];

	const handleUser = (id: MenuInfo) => {
		console.log(id.keyPath);
	};

	return (
		<div style={{ background: colorBgContainer, width: '250px' }}>
			<Menu
				mode='inline'
				defaultSelectedKeys={['0']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
				items={siderMenu}
				onClick={id => handleUser(id)}
			/>
		</div>
	);
};

const SIDER_MEMU = [
	{ id: 1, icon: LaptopOutlined, name: '친구 목록' },
	{ id: 2, icon: UserOutlined, name: '개인 채팅' },
	{ id: 3, icon: NotificationOutlined, name: '단체 채팅' },
];

export default Sider;
