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
				className={`d-flex  justify-content-between align-items-center  text-start form-control ${mode}`}
				onClick={onClick}
				ref={ref}
			>
				<span>{value}</span>
				<img src={calendarIcon} alt='Calendar' />
			</button>
		</Fragment>
	);
});

const DateInput = ({ initialDate, label, ...datePickerProps }) => {
	const [startDate, setStartDate] = React.useState(initialDate ?? new Date());
	return (
		<Fragment>
			<StyledLabel label={label} />
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				customInput={<DatePickerCustomInput />}
			/>
		</Fragment>
	);
};

export default DateInput;
