/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { messageProps, themeProps } from '../../../constants/types';
import { useCurrentUser } from '../../contexts/ContextWrapper';

const ChattingUserInfo = ({ message }: { message: messageProps }) => {
	const { userList } = useCurrentUser();

	const [chatUserName] =
		userList === undefined || null
			? ''
			: userList.filter(({ uid }: { uid: string }) => uid === message.sendId);

	return <input value={chatUserName.displayName} readOnly css={userName} />;
};

export default ChattingUserInfo;

export const userName = (theme: themeProps) => css`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	text-align: center;
	background: ${theme.blue2};
	color: ${theme.white};
`;
