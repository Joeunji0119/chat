/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Dispatch, SetStateAction } from 'react';
import { Switch } from 'antd';
import { flexCenter } from '../../shared/variableStyle';

interface pageModeProps {
	pageMode: string;
	setPageMode: Dispatch<SetStateAction<string>>;
}

const SwithAuthModeButton = ({ pageMode, setPageMode }: pageModeProps) => {
	const swichAuthMode = (checked: boolean) => {
		checked ? setPageMode('SignIn') : setPageMode('SignUp');
	};
	return (
		<header css={titleContainer}>
			<div>{pageMode}</div>
			<Switch defaultChecked onChange={swichAuthMode} />
		</header>
	);
};

export default SwithAuthModeButton;

interface themeProps {
	[x: string]: string;
}

const titleContainer = (theme: themeProps) => css`
	${flexCenter.flex('row', ' space-evenly', 'center')}
	height: 15%;
	padding: 30px 30px 20px 30px;
	font-size: 40px;
	font-weight: 700;
	color: ${theme.blue2};
`;
