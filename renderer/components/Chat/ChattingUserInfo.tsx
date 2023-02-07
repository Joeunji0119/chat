/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { themeProps } from '../../constants/types';

const ChattingUserInfo = () => {
	return <input defaultValue='은지' readOnly css={userName} />;
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
