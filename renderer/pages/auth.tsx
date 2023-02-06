/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form } from 'antd';
import { flexCenter } from '../shared/variableStyle';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

import {
	SwithAuthModeButton,
	SummitButton,
	UserEmail,
	UserImage,
	UserName,
	UserPassword,
} from '../components/auth';
import { useState } from 'react';

import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { app, db } from '../firebase';

import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
} from 'firebase/storage';

import {
	useCurrentUser,
	useUserImage,
} from '../components/contexts/ContextWrapper';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import CompoundedSpace from 'antd/es/space';

interface authProps {
	[x: string]: string;
}

interface themeProps {
	[x: string]: string;
}

const auth = () => {
	const { imageFile } = useUserImage();
	const [pageMode, setPageMode] = useState('SignIn');
	const auth = getAuth(app);
	const router = useRouter();
	const [error, setError] = useState(false);
	const { setCurrentUser } = useCurrentUser();

	// const storage = getStorage();

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
				console.log(res);
				router.push('/home');
				// console.log(uploadTask);
				// uploadTask.on(
				// 	'state_changed',
				// 	error => {
				// 		console.log(error);
				// 	},
				// 	async () => {
				// 		await getDownloadURL(uploadTask.snapshot.ref).then(
				// 			async downloadURL => {
				// 				console.log(11111, downloadURL);
				// 				await updateProfile(res.user, {
				// 					displayName,
				// 					photoURL: downloadURL,
				// 				});
				setDoc(doc(db, 'users', res.user.uid), {
					uid: res.user.uid,
					displayName,
					email,
					// photoURL: imageFile,
				});
				// 			}
				// 		);
				// 	}
				// );
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
					{pageMode === 'SignUp' && <UserImage />}
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
