import React from 'react';
import { Form, Input } from 'antd';

const UserPassword = () => {
	return (
		<Form.Item
			label='Password'
			name='password'
			rules={[{ required: true, message: 'Please input your password!' }]}>
			<Input.Password />
		</Form.Item>
	);
};

export default UserPassword;
