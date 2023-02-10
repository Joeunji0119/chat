/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { themeProps } from '../constants/types';
import { flexCenter } from '../shared/variableStyle';

const HomeGuideContainer = () => {
	return (
		<div css={HomeGuideContainerlayout}>
			<h1>Happy cherryChat🍒</h1>
			<div>친구 목록을 눌러 친구를 확인하세요</div>
			<br />
			<div css={textLayout}>
				1. 친구 목록의 친구를 누른 후 개인 채팅란을 클릭하면 해당 채팅방이
				만들어집니다.
				<br />
				<br />
				2. 좌측 상단 단체 채팅 + 버튼을 누르면 단체 채팅방을 만들 수 있습니다.
			</div>
		</div>
	);
};

export default HomeGuideContainer;

const HomeGuideContainerlayout = (theme: themeProps) => css`
	${flexCenter.flex('column', 'flex-start', 'center')}
	height: 85vh;
	width: 60vw;
	margin: 3%;
	border-radius: 20px;
	background: ${theme.grey};
	padding-top: 20%;
`;

const textLayout = css`
	padding: 20%;
`;
