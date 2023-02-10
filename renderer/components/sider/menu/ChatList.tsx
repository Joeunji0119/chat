/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Menu } from 'antd';
import { useClickedUser, useCurrentUser } from '../../contexts/ContextWrapper';
import { MenuLayout } from '../Sider';
import { MenuInfo } from 'rc-menu/lib/interface';
import { convertListData, getMenu } from '../../../constants/menuDataConvert';
import { TeamOutlined } from '@ant-design/icons';

const ChatList = () => {
	const { chatList } = useCurrentUser();
	const { setClickedUserUid } = useClickedUser();

	const handleSelectChat = (uid: MenuInfo) => {
		setClickedUserUid(uid);
	};

	const chatListMenu = [
		getMenu(
			'개인 채팅',
			'userChats',
			<TeamOutlined />,
			convertListData(chatList)
		),
	];

	return (
		<Menu
			mode='inline'
			css={MenuLayout}
			items={chatListMenu}
			onClick={uid => handleSelectChat(uid)}
		/>
	);
};

export default ChatList;
