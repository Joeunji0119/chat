import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

const Nav = () => {
	const menu: MenuProps['items'] = NAV_MENU.map(({ id, name }) => ({
		key: id,
		label: `${name}`,
	}));
	return <Menu theme='dark' mode='horizontal' items={menu} />;
};

const NAV_MENU = [
	{ id: 1, name: 'HOME' },
	{ id: 2, name: 'LOGOUT' },
];

export default Nav;
