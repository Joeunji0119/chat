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
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { app } from '../firebase';
import UserPicture from '../components/auth/authForm/UserPicture';

interface authProps {
	[x: string]: string;
}

interface themeProps {
	[x: string]: string;
}

const auth = () => {
	const [pageMode, setPageMode] = useState('SignIn');
	const auth = getAuth(app);

	const handleSummit = async (values: authProps) => {
		const { email, password, username } = values;

		await createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
			})
			.then(res => console.log(111, res))
			.catch(error => console.log(error));
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<authProps>) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={handleSummit}
				onFinishFailed={onFinishFailed}
				autoComplete='on'
				size='large'
				css={authLayout}>
				<PageSwitchButton pageMode={pageMode} setPageMode={setPageMode} />
				<main css={formContainer}>
					{pageMode === 'SignUP' && <UserPicture />}
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

const authLayout = (theme: themeProps) => css`
	${flexCenter.absoluteCenter}
	${flexCenter.flex('column', 'center', '')}
    padding: 5% 10%;
	background: ${theme.grey};
	border-radius: 8px;
	z-index: 1;
`;

const formContainer = css`
	height: 80%;
	padding-top: 20%;
`;
