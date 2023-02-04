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
	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0;
		outline: none;
		border: none;
		:focus,
		:active {
			outline: none;
			box-shadow: none;
		}
	}
`;
