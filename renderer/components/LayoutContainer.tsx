import React from 'react';
import Nav from './common/Nav';

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Nav />
			<main style={{ display: 'flex' }}>{children}</main>
		</>
	);
};
export default LayoutContainer;
