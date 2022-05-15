import React, { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import { useTheme } from '../../context/UIcontext';
import StyledLabel from './StyledLabel';
import calendarIcon from '../../assets/images/icon-calendar.svg';

const DatePickerCustomInput = React.forwardRef(({ value, onClick }, ref) => {
	const { mode } = useTheme();
	return (
		<Fragment>
			<button
				className={`d-flex justify-content-between align-items-center  text-start form-control ${mode}`}
				onClick={(e) => {
					e.preventDefault();
					onClick();
				}}
				ref={ref}
			>
				<span>{value}</span>
				<img src={calendarIcon} alt='Calendar' />
			</button>
		</Fragment>
	);
});

const DateInput = ({ label, onChange, selected, ...datePickerProps }) => {
	return (
		<Fragment>
			<StyledLabel label={label} />
			<DatePicker
				selected={selected}
				onChange={onChange}
				customInput={<DatePickerCustomInput />}
				{...datePickerProps}
			/>
		</Fragment>
	);
};

export default DateInput;
