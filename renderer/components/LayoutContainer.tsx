import React from 'react';
import Nav from './common/Nav';
import Sider from './common/Sider';
const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Nav />
			<nav style={{ display: 'flex' }}>
				<Sider />
				{children}
			</nav>
		</>
	);
};
export default LayoutContainer;
