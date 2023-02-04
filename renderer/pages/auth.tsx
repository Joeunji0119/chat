/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Checkbox, Form, Switch } from 'antd';
import { useState } from 'react';
import UserEmail from '../components/authForm/UserEmail';
import UserName from '../components/authForm/userName';
import UserPassword from '../components/authForm/UserPassword';
import { flexCenter } from '../shared/variableStyle';

const auth = () => {
	const [pageMode, setPageMode] = useState('SignIn');

	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	const isSignIn = (checked: boolean) => {
		checked ? setPageMode('SignIn') : setPageMode('SignUP');
	};

	const handleButtonText = pageMode === 'SignIn' ? 'Login' : 'SignUp';
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
				<header css={title}>
					<div>{pageMode}</div>
					<Switch defaultChecked onChange={isSignIn} />
				</header>
				<article css={formContainer}>
					{pageMode === 'SignUp' && <UserName />}
					<UserEmail />
					<UserPassword />
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button css={authButton} type='primary' htmlType='submit'>
							{handleButtonText}
						</Button>
					</Form.Item>
				</article>
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

const title = (theme: themeProps) => css`
	${flexCenter.flex('row', ' space-evenly', 'center')}
	height: 15%;
	padding: 30px 30px 20px 30px;
	font-size: 40px;
	font-weight: 700;
	color: ${theme.blue2};
`;

const formContainer = css`
	height: 80%;
	padding-top: 20%;
`;

const authButton = css`
	margin-top: 30%;
`;
