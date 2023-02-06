import { RcFile } from 'antd/es/upload';
import React from 'react';
import { createContext, useContext, useState } from 'react';

// interface FileProps {
// 	lastModified: number;
// 	name: string;
// 	size: number;
// 	type: string;
// }

type ContextFileProps = {
	imageFile: RcFile;
	setImageFile: React.Dispatch<React.SetStateAction<RcFile>>;
};

export const UserImageContext = createContext<ContextFileProps>(null);

export const UserCurrentContext = createContext(null);

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
	const [imageFile, setImageFile] = useState<RcFile>(null);
	const [currentUser, setCurrentUser] = useState(null);

	console.log(currentUser);

	return (
		<UserCurrentContext.Provider value={{ currentUser, setCurrentUser }}>
			<UserImageContext.Provider value={{ imageFile, setImageFile }}>
				{children}
			</UserImageContext.Provider>
		</UserCurrentContext.Provider>
	);
};

export const useUserImage = () => useContext(UserImageContext);
export const useCurrentUser = () => useContext(UserCurrentContext);
