import React from 'react';
import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import type { MenuProps } from 'antd';

const Nav = () => {
	const menu: MenuProps['items'] = NAV_MENU.map(key => ({
		key: key.id,
		label: `${key.name}`,
	}));
	return (
		<Header className='header'>
			<div className='logo' />
			<Menu
				theme='dark'
				mode='horizontal'
				// defaultSelectedKeys={['2']}
				items={menu}
			/>
		</Header>
	);
};

const NAV_MENU = [
	{ id: 1, name: 'HOME' },
	{ id: 2, name: 'LOGOUT' },
];

export default Nav;
