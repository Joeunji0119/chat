/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const global = css`
	* {
		box-sizing: border-box;
	}
	body {
		overflow-y: hidden;
		overflow-x: hidden;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	li {
		list-style: none;
	}
	button {
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
`;
