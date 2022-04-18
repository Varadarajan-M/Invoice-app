import { Checkbox } from '@mui/material';
import React from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckBox = ({ value, defaultChecked }) => {
	return (
		<Checkbox
			{...label}
			defaultChecked={defaultChecked}
			sx={{
				'&:hover': {
					color: 'rgb(73 58 146)',
				},
			}}
			value={value}
		/>
	);
};

export default CheckBox;
