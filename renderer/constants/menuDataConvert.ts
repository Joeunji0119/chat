import { getItemProp, MenuItem, Props, userListProps } from './types';

export const getMenu: getItemProp = (label, key, icon?, children?) => {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
};

export function convertListData(data?: userListProps[]) {
	const list = data?.map(({ displayName, uid }) => {
		return { label: displayName, key: uid };
	});
	return list;
}

export const chatListConvert = (chatListData: Props) => {
	if (chatListData === null || undefined) return;
	const res = Object?.entries(chatListData)
		?.map(el => el[1])
		?.map(({ userInfo }) => {
			return { displayName: userInfo?.displayName, uid: userInfo?.uid };
		});
	return res.filter(({ uid }) => uid !== undefined);
};
