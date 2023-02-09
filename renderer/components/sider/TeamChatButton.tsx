/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { setModalToogleProps } from '../../constants/types';

const TeamChatButton = ({ setModalToogle }: setModalToogleProps) => {
	const handleUserListModal = () => {
		setModalToogle(true);
	};

	return (
		<div css={TeamChatButtonLayout} onClick={handleUserListModal}>
			<PlusCircleTwoTone spin={true} />
			<div css={TeamChatButtonText}>단체 채팅</div>
		</div>
	);
};
export default TeamChatButton;

const TeamChatButtonLayout = css`
	display: flex;
	margin-left: 20px;
	font-size: 25px;
	align-items: center;
	padding-bottom: 30px;
	cursor: pointer;
`;

const TeamChatButtonText = css`
	font-size: 14px;
	padding-left: 10px;
`;
