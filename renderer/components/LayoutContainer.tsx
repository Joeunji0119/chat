import { Watermark } from 'antd';
import React from 'react';
import Nav from './common/Nav';

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Nav />
			<Watermark content={['cherryChat🍒', 'Happy Working']}>
				<main style={{ display: 'flex', height: '100vh' }}>{children}</main>
			</Watermark>
		</>
	);
};
export default LayoutContainer;
