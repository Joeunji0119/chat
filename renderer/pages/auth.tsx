/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form } from 'antd';
import { flexCenter } from '../shared/variableStyle';

import {
	PageSwitchButton,
	SummitButton,
	UserEmail,
	UserName,
	UserPassword,
} from '../components/auth';
import { useState } from 'react';

const auth = () => {
	const [pageMode, setPageMode] = useState('SignIn');

	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='on'
				size='large'
				css={authLayout}>
				<PageSwitchButton pageMode={pageMode} setPageMode={setPageMode} />
				<main css={formContainer}>
					{pageMode === 'SignUP' && <UserName />}
					<UserEmail />
					<UserPassword />
					<SummitButton pageMode={pageMode} />
				</main>
			</Form>
		</>
	);
};

export default auth;

interface themeProps {
	[x: string]: string;
}

const authLayout = (theme: themeProps) => css`
	${flexCenter.fixedCenter}
	${flexCenter.flex('column', 'center', '')}
    padding: 10% 10% 10% 10%;
	background: ${theme.grey};
	border-radius: 8px;
`;

const formContainer = css`
	height: 80%;
	padding-top: 20%;
`;
