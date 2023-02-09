import { MenuProps } from 'antd';
import { Dispatch, SetStateAction } from 'react';

export interface authProps {
	[x: string]: string;
}

export interface themeProps {
	[x: string]: string;
}

export interface listProps {
	[x: string]: string;
}

export interface userListProps {
	[x: string]: string;
}

export interface Props {
	[x: string]: any;
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

export interface messageProps {
	id: string;
	sendId: string;
	text: string;
	date: messageDateProps;
}

export interface messageDateProps {
	Timestamp: messageDateSecondsProps;
}
export interface messageDateSecondsProps {
	[x: string]: number;
}
export interface pageModeProps {
	pageMode: string;
	setPageMode: Dispatch<SetStateAction<string>>;
}

export interface setModalToogleProps {
	setModalToogle: React.Dispatch<React.SetStateAction<boolean>>;
}
