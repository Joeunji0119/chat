/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const flexCenter = {
	flex: (direction = 'row', justify = 'center', align = 'center') => `
	display:flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`,
};
