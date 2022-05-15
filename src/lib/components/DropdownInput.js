import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import { useTheme } from '../../context/UIcontext';
import StyledLabel from './StyledLabel';
const DropdownInput = React.forwardRef(
	({ optionList, defaultOption, label, ...selectProps }, ref) => {
		const { mode } = useTheme();
		return (
			<Fragment>
				<StyledLabel label={label} />
				<Form.Select
					className={`custom-select ${mode}`}
					defaultValue={defaultOption.value}
					ref={ref}
					{...selectProps}
				>
					{optionList.map((option, index) => (
						<option key={index} value={option?.value}>
							{option?.value ?? ''}
						</option>
					))}
				</Form.Select>
			</Fragment>
		);
	},
);

export default DropdownInput;
