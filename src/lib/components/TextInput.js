import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import StyledLabel from './StyledLabel';
import { useTheme } from '../../context/UIcontext';
const textStyles = {
	transition: 'color 0.2s ease-in !important',
	fontWeight: 700,
};
const TextInput = ({ errors, style, label, ...inputProps }) => {
	const { mode } = useTheme();
	const inputstyles = { ...textStyles, ...style };
	return (
		<Fragment>
			<StyledLabel label={label} />
			<Form.Control
				type='text '
				{...inputProps}
				className={`custom-text-input ${mode}`}
				isInvalid={errors?.message ? true : false}
				style={inputstyles}
			/>
			<Form.Control.Feedback type='invalid'>
				{errors?.message ?? ''}
			</Form.Control.Feedback>
		</Fragment>
	);
};

export default TextInput;
