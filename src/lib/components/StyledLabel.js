import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTheme } from './../../context/UIcontext';

const StyledLabel = ({ label, onClick }) => {
	const { theme } = useTheme();
	return (
		<Form.Label onClick={onClick} style={{ ...theme.invoiceForm.labels }}>
			{label}
		</Form.Label>
	);
};

export default StyledLabel;
