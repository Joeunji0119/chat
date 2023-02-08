/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useRouter } from 'next/router';
import { flexCenter } from '../../shared/variableStyle';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Nav = () => {
	const router = useRouter();

	const handlePage = (e: MenuInfo) => {
		const menuValue = e.domEvent.currentTarget.outerText;
		menuValue === 'LOGOUT'
			? signOut(auth) && router.push('/auth')
			: router.push('/home');
	};

	const menu: MenuProps['items'] = NAV_MENU.map(({ id, name }) => ({
		key: id,
		label: `${name}`,
	}));

	return (
		<>
			<Menu
				theme='dark'
				mode='horizontal'
				items={menu}
				onClick={e => handlePage(e)}
				css={NavLayout}
			/>
		</>
	);
};

const NAV_MENU = [
	{ id: 1, name: 'HOME' },
	{ id: 2, name: 'LOGOUT' },
];

export default Nav;

const NavLayout = css`
	${flexCenter.flex('row', 'left', 'center')}
	height: 70px;
	width: 100vw;
	padding: 0 10px;
	position: absolute;
	z-index: 50;
`;
