import React from 'react';
import { useTheme } from '../context/UIcontext';
import DateInput from '../lib/components/DateInput';
import DropdownInput from '../lib/components/DropdownInput';
import TextInput from '../lib/components/TextInput';
import Button from './../lib/components/Button';
import Text from './../lib/components/Text';

const optionList = [
	{
		value: 'Net 1 Day',
		selected: false,
	},
	{
		value: 'Net 7 Days',
		selected: false,
	},
	{
		value: 'Net 14 Days',
		selected: false,
	},
	{
		value: 'Net 30 Days',
		selected: true,
	},
];
function Form() {
	const { theme } = useTheme();
	return (
		<div className='content-form'>
			<Text className='text-primary fw-bold'>Bill From</Text>
			<div className='row'>
				<div className='col mt-2'>
					<TextInput
						label='Street Address'
						id='from-street-address'
					/>
				</div>
			</div>

			<div className='row mt-4'>
				<div className='col-sm-6  col-lg-4  col-6 '>
					<TextInput label='City' id='from-city' />
				</div>
				<div className='col-sm-6  col-lg-4 col-6 '>
					<TextInput label='Post Code' id='from-postcode' />
				</div>

				<div className='col-sm-12 col-lg-4 col-12 mt-4 mt-md-0'>
					<TextInput label='Country' id='from-country' />
				</div>
			</div>
			<div className='row mt-4'>
				<Text className='text-primary fw-bold'>Bill To</Text>
			</div>
			<div className='row'>
				<div className='col mt-3'>
					<TextInput label='Client Name' id='client-name' />
				</div>
			</div>
			<div className='row'>
				<div className='col mt-3'>
					<TextInput label={"Client's Email"} id='client-email' />
				</div>
			</div>
			<div className='row'>
				<div className='col mt-3'>
					<TextInput
						label='Street Address'
						id='from-street-address'
					/>
				</div>
			</div>

			<div className='row mt-4'>
				<div className='col-sm-6  col-lg-4  col-6 '>
					<TextInput label='City' id='from-city' />
				</div>
				<div className='col-sm-6  col-lg-4 col-6 '>
					<TextInput label='Post Code' id='from-postcode' />
				</div>

				<div className='col-sm-12 col-lg-4 col-12 mt-4 mt-md-0'>
					<TextInput label={'Country'} id='from-country' />
				</div>
			</div>
			<div className='row mt-4'>
				<div className='col'>
					<DateInput label='Invoice Date' />
				</div>
				<div className='col'>
					<DropdownInput
						optionList={optionList}
						label='Payment Terms'
					/>
				</div>
			</div>
			<div className='row'>
				<div className='col mt-4'>
					<TextInput label='Description' id='description' />
				</div>
			</div>
			<div className='row'>
				<div className='col-12 mt-4'>
					<Button
						className='w-100 m-0'
						style={{ ...theme.invoiceForm.buttons.addNewItem }}
					>
						+ Add New Item
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Form;
