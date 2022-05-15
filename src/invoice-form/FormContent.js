import React from 'react';
import { useTheme } from '../context/UIcontext';
import DateInput from '../lib/components/DateInput';
import DropdownInput from '../lib/components/DropdownInput';
import TextInput from '../lib/components/TextInput';
import Button from './../lib/components/Button';
import Text from './../lib/components/Text';
import { Controller } from 'react-hook-form';
import { EMAIL_REGEX } from './helper';
const optionList = [
	{
		value: 'Net 1 Day',
		selected: false,
	},
	{
		value: 'Net 7 Days',
		selected: true,
	},
	{
		value: 'Net 14 Days',
		selected: false,
	},
	{
		value: 'Net 30 Days',
		selected: false,
	},
];

const defaultOption = optionList.filter((option) => option.selected)[0];

function Form({ register, errors, control }) {
	const { theme } = useTheme();

	return (
		<div className='content-form'>
			<Text className='text-primary fw-bold'>Bill From</Text>
			<div className='row'>
				<div className='col mt-2'>
					<TextInput
						{...register('fromStreetAddress', {
							required: 'This field is required',
							minLength: {
								value: 3,
								message: 'Should be a minimum of 3 characters',
							},
						})}
						errors={errors.fromStreetAddress ?? null}
						id='from-street-address'
						label='Street Address'
					/>
				</div>
			</div>

			<div className='row mt-4'>
				<div className='col-sm-6  col-lg-4  col-6 '>
					<TextInput
						{...register('fromCity', {
							required: 'This field is required',
							minLength: {
								value: 3,
								message: 'Should be a minimum of 3 characters',
							},
						})}
						errors={errors.fromCity ?? null}
						label='City'
						id='from-city'
					/>
				</div>
				<div className='col-sm-6  col-lg-4 col-6 '>
					<TextInput
						{...register('fromPostcode', {
							required: 'This field is required',
							minLength: {
								value: 4,
								message: 'Should be a minimum of 4 characters',
							},
						})}
						errors={errors.fromPostcode ?? null}
						label='Post Code'
						id='from-postcode'
					/>
				</div>

				<div className='col-sm-12 col-lg-4 col-12 mt-4 mt-md-0'>
					<TextInput
						{...register('fromCountry', {
							required: 'This field is required',
							minLength: {
								value: 2,
								message: 'Should be a minimum of 2 characters',
							},
						})}
						errors={errors.fromCountry ?? null}
						label='Country'
						id='from-country'
					/>
				</div>
			</div>
			<div className='row mt-4'>
				<Text className='text-primary fw-bold'>Bill To</Text>
			</div>
			<div className='row'>
				<div className='col mt-3'>
					<TextInput
						{...register('clientName', {
							required: 'This field is required',
						})}
						errors={errors.clientName ?? null}
						label='Client Name'
						id='client-name'
					/>
				</div>
			</div>
			<div className='row'>
				<div className='col mt-3'>
					<TextInput
						{...register('clientEmail', {
							required: 'This field is required',
							pattern: {
								value: EMAIL_REGEX,
								message: 'Invalid Email',
							},
						})}
						errors={errors.clientEmail ?? null}
						label={"Client's Email"}
						id='client-email'
					/>
				</div>
			</div>
			<div className='row'>
				<div className='col mt-3'>
					<TextInput
						{...register('toStreetAddress', {
							required: 'This field is required',
							minLength: {
								value: 3,
								message: 'Should be a minimum of 3 characters',
							},
						})}
						errors={errors.toStreetAddress ?? null}
						label='Street Address'
						id='to-street-address'
					/>
				</div>
			</div>

			<div className='row mt-4'>
				<div className='col-sm-6  col-lg-4  col-6 '>
					<TextInput
						{...register('toCity', {
							required: 'This field is required',
							minLength: {
								value: 3,
								message: 'Should be a minimum of 3 characters',
							},
						})}
						errors={errors.toCity ?? null}
						label='City'
						id='to-city'
					/>
				</div>
				<div className='col-sm-6  col-lg-4 col-6 '>
					<TextInput
						{...register('toPostcode', {
							required: 'This field is required',
							minLength: {
								value: 4,
								message: 'Should be a minimum of 4 characters',
							},
						})}
						errors={errors.toPostcode ?? null}
						label='Post Code'
						id='to-postcode'
					/>
				</div>

				<div className='col-sm-12 col-lg-4 col-12 mt-4 mt-md-0'>
					<TextInput
						{...register('toCountry', {
							required: 'This field is required',
							minLength: {
								value: 2,
								message: 'Should be a minimum of 2 characters',
							},
						})}
						errors={errors.toCountry ?? null}
						label={'Country'}
						id='to-country'
					/>
				</div>
			</div>
			<div className='row mt-4'>
				<div className='col'>
					<Controller
						control={control}
						name='invoiceDate'
						defaultValue={new Date()}
						render={({ field }) => (
							<DateInput
								label='Invoice Date'
								onChange={field.onChange}
								selected={field.value ?? new Date()}
							/>
						)}
					/>
				</div>
				<div className='col'>
					<DropdownInput
						{...register('paymentTerms')}
						defaultOption={defaultOption}
						optionList={optionList}
						label='Payment Terms'
					/>
				</div>
			</div>
			<div className='row'>
				<div className='col mt-4'>
					<TextInput
						{...register('description')}
						label='Description'
						id='description'
					/>
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
