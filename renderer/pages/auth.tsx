/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form } from 'antd';
import { flexCenter } from '../shared/variableStyle';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

import {
	SwithAuthModeButton,
	SummitButton,
	UserEmail,
	UserName,
	UserPassword,
	UserImage,
} from '../components/auth';
import { useEffect, useState } from 'react';

import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { app, db } from '../firebase';

import { useCurrentUser } from '../components/contexts/ContextWrapper';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { getUserInfo } from '../api/getUserInfo';
import { authProps, themeProps } from '../constants/types';

const auth = () => {
	const [pageMode, setPageMode] = useState('SignIn');
	const auth = getAuth(app);
	const router = useRouter();
	const [error, setError] = useState(false);
	const { setCurrentUser } = useCurrentUser();

	const handleSummit = async (values: authProps) => {
		const { email, password, username } = values;
		const displayName = username;

		const handleSignIn = async () => {
			await signInWithEmailAndPassword(auth, email, password);
			try {
				onAuthStateChanged(auth, user => {
					return setCurrentUser(user);
				});
				router.push('/home');
			} catch (err) {
				console.log(err);
			}
		};

		const handleSignUp = async () => {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			try {
				onAuthStateChanged(auth, user => {
					return setCurrentUser(user);
				});
				await setDoc(doc(db, 'users', res.user.uid), {
					uid: res.user.uid,
					displayName,
					email,
				});
				await setDoc(doc(db, 'userChats', res.user.uid), {
					uid: res.user.uid,
					displayName,
					email,
				});
				await setDoc(doc(db, 'teamChats', res.user.uid), {
					uid: 'res.user.uid',
					displayName,
					email,
				});

				router.push('/home');
			} catch (err) {
				console.log(err);
			}
		};
		pageMode === 'SignUp' ? handleSignUp() : handleSignIn();
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
				onFinish={handleSummit}
				onFinishFailed={onFinishFailed}
				autoComplete='on'
				size='large'
				css={authLayout}>
				<SwithAuthModeButton pageMode={pageMode} setPageMode={setPageMode} />
				<main css={formContainer}>
					{/* {pageMode === 'SignUp' && <UserImage />} */}
					{pageMode === 'SignUp' && <UserName />}
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
