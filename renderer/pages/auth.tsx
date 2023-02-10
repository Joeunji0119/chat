/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form } from 'antd';
import { flexCenter } from '../shared/variableStyle';
import { authProps, themeProps } from '../constants/types';

import {
	SwithAuthModeButton,
	SummitButton,
	UserEmail,
	UserName,
	UserPassword,
} from '../components/auth';

import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';
import { app, db } from '../firebase';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useCurrentUser } from '../components/contexts/ContextWrapper';

const auth = () => {
	const [pageMode, setPageMode] = useState('SignIn');
	const auth = getAuth(app);
	const router = useRouter();
	const { setCurrentUser } = useCurrentUser();

	const handleSummit = async (values: authProps) => {
		const { email, password, username } = values;
		const displayName = username;

		const handleSignIn = async () => {
			const res = await signInWithEmailAndPassword(auth, email, password).catch(
				error => alert('아이디와 비밀번호를 확인하세요.')
			);
			if (res) {
				onAuthStateChanged(auth, user => {
					return setCurrentUser(user);
				});
				router.push('/home');
			}
		};

		const handleSignUp = async () => {
			await createUserWithEmailAndPassword(auth, email, password)
				.then(res => {
					setDoc(doc(db, 'users', res.user.uid), {
						uid: res.user.uid,
						displayName,
						email,
					});
					setDoc(doc(db, 'userChats', res.user.uid), {
						uid: res.user.uid,
						displayName,
						email,
					});
					setDoc(doc(db, 'teamChats', res.user.uid), {
						uid: res.user.uid,
						displayName,
						email,
					});
					alert('회원가입에 성공했습니다!');
					setPageMode('SignIn');
				})
				.catch(error =>
					alert('이메일이나 아이디, 비밀번호 형식이 맞지 않습니다.')
				);
		};
		pageMode === 'SignUp' ? handleSignUp() : handleSignIn();
	};

	return (
		<>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={handleSummit}
				autoComplete='on'
				size='large'
				css={authLayout}>
				<SwithAuthModeButton pageMode={pageMode} setPageMode={setPageMode} />

				<main css={formContainer}>
					{pageMode === 'SignUp' && <UserName />}
					<UserEmail />
					<UserPassword />
					<SummitButton pageMode={pageMode} />
					<footer css={footer}>
						스위치를 누르면 {pageMode === 'SignUp' ? '로그인' : '회원가입'}
						창으로 이동합니다
					</footer>
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

const footer = (theme: themeProps) => css`
	color: ${theme.grey4};
	font-size: 10px;
	text-align: center;
`;
