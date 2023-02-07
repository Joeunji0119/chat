import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, UploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
// import { useUserImage } from '../../contexts/ContextWrapper';

const useUploadImage = () => {
	// const { setImageFile } = useUserImage();

	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState('');

	const imageValidation = (file: RcFile) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}
		return isJpgOrPng && isLt2M;
	};

	const handleChange: UploadProps['onChange'] = (
		info: UploadChangeParam<UploadFile>
	) => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			return;
		}
		if (info.file.status === 'done') {
			setLoading(false);
			setImageUrl(URL.createObjectURL(info.file.originFileObj));
			// setImageFile(info.file.originFileObj);
		}
	};

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	const thumbNail = imageUrl ? (
		<img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
	) : (
		uploadButton
	);

	return {
		imageValidation,
		uploadButton,
		handleChange,
		thumbNail,
	};
};

export default useUploadImage;
