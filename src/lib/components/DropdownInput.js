import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import { useTheme } from '../../context/UIcontext';
import StyledLabel from './StyledLabel';
const DropdownInput = ({ optionList, label, ...selectProps }) => {
	const { mode } = useTheme();
	return (
		<Fragment>
			<StyledLabel label={label} />
			<Form.Select className={`custom-select ${mode}`}>
				{optionList.map((option) => (
					<option
						selected={option?.selected}
						value={option?.value}
						{...selectProps}
					>
						{option?.value ?? ''}
					</option>
				))}
			</Form.Select>
		</Fragment>
	);
};

export default DropdownInput;
