/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const flexCenter = {
	flex: (direction = 'row', justify = 'center', align = 'center') => `
	display:flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`,

	fixedCenter: css`
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	`,

	absoluteCenter: css`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`,
};
