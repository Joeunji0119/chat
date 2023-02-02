import React from 'react';
import { Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons';

const Sider = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const siderMenu: MenuProps['items'] = [
		UserOutlined,
		LaptopOutlined,
		NotificationOutlined,
	].map((icon, index) => {
		const key = String(index + 1);

		return {
			key: `sub${key}`,
			icon: React.createElement(icon),
			label: `subnav ${key}`,
			children: new Array(4).fill(null).map((_, j) => {
				const subKey = index * 4 + j + 1;
				return {
					key: subKey,
					label: `option${subKey}`,
				};
			}),
		};
	});

	return (
		<div style={{ background: colorBgContainer, width: '200px' }}>
			<Menu
				mode='inline'
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
				items={siderMenu}
			/>
		</div>
	);
};

export default Sider;
