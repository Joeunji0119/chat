/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Upload } from 'antd';
import { flexCenter } from '../../../shared/variableStyle';
import useUploadPicture from '../hooks/useUploadPicture';

const UserPicture = () => {
	const { beforeUpload, handleChange, thumbNail } = useUploadPicture();

	return (
		<div css={uploadContainer}>
			<div>
				<Upload
					name='avatar'
					listType='picture-card'
					className='avatar-uploader'
					showUploadList={false}
					beforeUpload={beforeUpload}
					onChange={handleChange}>
					{thumbNail}
				</Upload>
			</div>
			<div> 🍒 upload your picture </div>
		</div>
	);
};

export default UserPicture;
const uploadContainer = css`
	${flexCenter.flex('column', 'center', 'center')}
	padding-bottom: 15%;
`;
