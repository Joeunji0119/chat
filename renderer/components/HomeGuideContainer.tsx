/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { themeProps } from '../constants/types';
import { flexCenter } from '../shared/variableStyle';

const HomeGuideContainer = () => {
	return (
		<div css={HomeGuideContainerlayout}>
			<h1>Happy cherryChat๐</h1>
			<div>์น๊ตฌ ๋ชฉ๋ก์ ๋๋ฌ ์น๊ตฌ๋ฅผ ํ์ธํ์ธ์</div>
			<br />
			<div css={textLayout}>
				1. ์น๊ตฌ ๋ชฉ๋ก์ ์น๊ตฌ๋ฅผ ๋๋ฅธ ํ ๊ฐ์ธ ์ฑํ๋์ ํด๋ฆญํ๋ฉด ํด๋น ์ฑํ๋ฐฉ์ด
				๋ง๋ค์ด์ง๋๋ค.
				<br />
				<br />
				2. ์ข์ธก ์๋จ ๋จ์ฒด ์ฑํ + ๋ฒํผ์ ๋๋ฅด๋ฉด ๋จ์ฒด ์ฑํ๋ฐฉ์ ๋ง๋ค ์ ์์ต๋๋ค.
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
