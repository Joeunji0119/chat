/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import UserList from './menu/UserList';
import ChatList from './menu/ChatList';
import TeamChatList from './menu/TeamChatList';

import { setModalToogleProps } from '../../constants/types';
import TeamChatButton from '../Chat/TeamChatButton';

const Sider = ({ setModalToogle }: setModalToogleProps) => {
	return (
		<section css={SiderLayout}>
			<TeamChatButton setModalToogle={setModalToogle} />
			<UserList />
			<ChatList />
			<TeamChatList />
		</section>
	);
};

export default Sider;

const SiderLayout = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 30vw;
	margin: 30px;
`;

export const MenuLayout = css`
	border-right: 0;
`;
