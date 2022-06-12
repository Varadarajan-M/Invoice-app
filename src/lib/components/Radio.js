import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const RadioInput = (props) => {
	const { value, label, style, onClick, ...radioProps } = props;
	return (
		<FormControlLabel
			className='w-100'
			value={value}
			control={<Radio />}
			label={label}
			style={{
				...style,
			}}
			sx={{
				'.MuiTypography-root': {
					fontFamily: 'League Spartan, sans-serif',
					fontWeight: 600,
				},
			}}
			{...radioProps}
		/>
	);
};

export default RadioInput;
