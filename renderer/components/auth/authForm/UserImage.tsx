/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Upload } from 'antd';
import { flexCenter } from '../../../shared/variableStyle';
import useUploadImage from '../hooks/useUploadImage';

const UserImage = () => {
	const { imageValidation, handleChange, thumbNail } = useUploadImage();
	return (
		<div css={uploadContainer}>
			<div>
				<Upload
					name='avatar'
					listType='picture-card'
					className='avatar-uploader'
					showUploadList={false}
					beforeUpload={imageValidation}
					onChange={handleChange}>
					{thumbNail}
				</Upload>
			</div>
			<div> 🍒 upload your picture </div>
		</div>
	);
};

export default UserImage;

const uploadContainer = css`
	${flexCenter.flex('column', 'center', 'center')}
	padding-bottom: 15%;
`;
