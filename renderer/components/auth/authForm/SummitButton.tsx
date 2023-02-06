/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form, Button } from 'antd';

interface pageModeProps {
	pageMode: string;
}

const SummitButton = ({ pageMode }: pageModeProps) => {
	const handleButtonText = pageMode === 'SignIn' ? 'Login' : 'SignUp';

	return (
		<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
			<Button css={authButton} type='primary' htmlType='submit'>
				{handleButtonText}
			</Button>
		</Form.Item>
	);
};

export default SummitButton;

const authButton = css`
	margin-top: 30%;
`;
