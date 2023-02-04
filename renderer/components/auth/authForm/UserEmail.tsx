import React from 'react';
import { Form, Input } from 'antd';

const UserEmail = () => {
	return (
		<Form.Item
			label='Email'
			name='Email'
			rules={[{ required: true, message: 'Please input your username!' }]}>
			<Input />
		</Form.Item>
	);
};

export default UserEmail;
