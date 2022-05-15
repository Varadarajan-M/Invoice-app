import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTheme } from './../../context/UIcontext';

const StyledLabel = ({ label, onCLick }) => {
	const { theme } = useTheme();
	return (
		<Form.Label onCLick={onCLick} style={{ ...theme.invoiceForm.labels }}>
			{label}
		</Form.Label>
	);
};

export default StyledLabel;
