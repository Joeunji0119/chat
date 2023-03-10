import { Form, Input } from 'antd';
import React from 'react';

const UserName = () => {
	return (
		<Form.Item
			label='Username'
			name='username'
			rules={[{ required: true, message: 'Please input your username!' }]}>
			<Input />
		</Form.Item>
	);
};

export default UserName;
