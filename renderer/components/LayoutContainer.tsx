import { Watermark } from 'antd';
import React from 'react';

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Watermark content={['cherryChat🍒', 'Happy Working']}>
				<main style={{ display: 'flex', height: '100vh' }}>{children}</main>
			</Watermark>
		</>
	);
};
export default LayoutContainer;
