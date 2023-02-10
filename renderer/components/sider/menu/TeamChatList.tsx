/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TeamOutlined } from '@ant-design/icons';
import { convertListData, getMenu } from '../../../constants/menuDataConvert';
import { useClickedUser, useCurrentUser } from '../../contexts/ContextWrapper';
import { MenuInfo } from 'rc-menu/lib/interface';
import { MenuLayout } from '../Sider';
import { Menu } from 'antd';

const TeamChatList = () => {
	const { teamChatList } = useCurrentUser();
	const { setClickedUserUid } = useClickedUser();

	const handleSelectTeamChat = (uid: MenuInfo) => {
		setClickedUserUid(uid);
	};

	const teamChatListMenu = [
		getMenu(
			'단체 채팅',
			'teamChats',
			<TeamOutlined />,
			convertListData(teamChatList)
		),
	];

	return (
		<Menu
			mode='inline'
			css={MenuLayout}
			items={teamChatListMenu}
			onClick={uid => handleSelectTeamChat(uid)}
		/>
	);
};

export default TeamChatList;
