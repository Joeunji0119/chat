import { MenuProps } from 'antd';

export interface authProps {
	[x: string]: string;
}

export interface themeProps {
	[x: string]: string;
}

export type MenuItem = Required<MenuProps>['items'][number];

export type getItemProp = {
	(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[]
	): MenuItem;
};

export interface userListProps {
	[x: string]: string;
}

export interface Props {
	[chatListData: string]: any;
}
