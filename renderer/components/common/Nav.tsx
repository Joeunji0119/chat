/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { flexCenter } from '../../shared/variableStyle';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';
import { useClickedUser } from '../contexts/ContextWrapper';

const Nav = () => {
	const router = useRouter();
	const { setClickedUserUid } = useClickedUser();

	const handlePage = (e: MenuInfo) => {
		const menuValue = e.domEvent.currentTarget.outerText;
		if (menuValue === 'LOGOUT') {
			setClickedUserUid('');
			signOut(auth);
			alert('로그아웃 되었습니다');
			router.push('/auth');
		}
		if (menuValue === 'HOME') {
			setClickedUserUid('');
			router.push('/home');
		}
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
