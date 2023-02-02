import React, { ReactDOM, ReactElement } from 'react';
import Nav from './common/Nav';
import Sider from './common/Sider';
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Nav />
			<div style={{ display: 'flex' }}>
				<Sider />
				{children}
			</div>
		</>
	);
};
export default Layout;
