/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TeamOutlined } from '@ant-design/icons';
import { convertListData, getMenu } from '../../../constants/menuDataConvert';
import { useCurrentUser } from '../../contexts/ContextWrapper';
import { MenuInfo } from 'rc-menu/lib/interface';
import { MenuLayout } from '../Sider';
import { Menu } from 'antd';

const TeamChatList = () => {
	const { teamChatList } = useCurrentUser();

	const handleSelectTeamChat = (uid: MenuInfo) => {
		console.log(uid);
	};

	const teamChatListMenu = [
		getMenu(
			'단체 채팅',
			'teamChats',
			<TeamOutlined />,
			convertListData(teamChatList)
		),
	];

	// console.log('사이더', teamchatList);

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
