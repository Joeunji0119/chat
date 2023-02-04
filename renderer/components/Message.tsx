/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const Message = () => {
	return (
		<div css={layout}>
			<div css={userName}></div>
		</div>
	);
};

export default Message;

const layout = css`
	background: red;
	height: 3%;
	margin-top: 1%;
	padding-bottom: 7%;
`;

const userName = css`
	width: 6%;
	height: 100%;
	padding-bottom: 6%;
	background: blue;
`;
