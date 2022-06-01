import { useFormContext, Controller, useWatch } from 'react-hook-form';
import TextInput from './../lib/components/TextInput';
import { OPTION_LIST } from './constants';
import DropdownInput from './../lib/components/DropdownInput';
import DateInput from './../lib/components/DateInput';
import { Fragment, useMemo, useEffect } from 'react';
import StyledLabel from './../lib/components/StyledLabel';
import { validateItemErrors, validations } from './helper';

export const FromStreetAddress = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('fromStreetAddress', validations.fromStreetAddress)}
			errors={errors.fromStreetAddress ?? null}
			label='Street Address'
		/>
	);
};

export const FromCity = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('fromCity', validations.fromCity)}
			errors={errors.fromCity ?? null}
			label='City'
		/>
	);
};

export const FromPostCode = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('fromPostcode', validations.fromPostcode)}
			errors={errors.fromPostcode ?? null}
			label='Post Code'
		/>
	);
};

export const FromCountry = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('fromCountry', validations.fromCountry)}
			errors={errors.fromCountry ?? null}
			label='Country'
		/>
	);
};

export const ClientName = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('clientName', validations.clientName)}
			errors={errors.clientName ?? null}
			label='Client Name'
		/>
	);
};

export const ClientEmail = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('clientEmail', validations.clientEmail)}
			errors={errors.clientEmail ?? null}
			label={"Client's Email"}
		/>
	);
};

export const ToStreetAddress = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('toStreetAddress', validations.toStreetAddress)}
			errors={errors.toStreetAddress ?? null}
			label='Street Address'
		/>
	);
};

export const ToCity = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('toCity', validations.toCity)}
			errors={errors.toCity ?? null}
			label='City'
		/>
	);
};

export const ToPostCode = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('toPostcode', validations.toPostcode)}
			errors={errors.toPostcode ?? null}
			label='Post Code'
		/>
	);
};

export const ToCountry = () => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<TextInput
			{...register('toCountry', validations.toCountry)}
			errors={errors.toCountry ?? null}
			label={'Country'}
		/>
	);
};

export const InvoiceDate = ({ defaultDate }) => {
	const { control } = useFormContext();
	return (
		<Controller
			control={control}
			name='invoiceDate'
			defaultValue={defaultDate}
			render={({ field }) => (
				<DateInput
					label='Invoice Date'
					onChange={field.onChange}
					selected={field.value ?? new Date()}
				/>
			)}
		/>
	);
};

export const PaymentTerms = ({ defaultPaymentTerm }) => {
	const { register } = useFormContext();
	return (
		<DropdownInput
			{...register('paymentTerms')}
			defaultOption={defaultPaymentTerm}
			optionList={OPTION_LIST}
			label='Payment Terms'
		/>
	);
};

export const Description = () => {
	const { register } = useFormContext();
	return <TextInput {...register('description')} label='Description' />;
};

// Dynamic Form Fields

export const ItemName = ({ index }) => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<Fragment>
			<StyledLabel
				className='d-sm-none d-inline-block'
				label='Item Name'
			/>
			<TextInput
				{...register(`items.${index}.name`, validations.itemName)}
				errors={validateItemErrors(errors ?? [], index, 'name')}
			/>
		</Fragment>
	);
};

export const Quantity = ({ index }) => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<Fragment>
			<StyledLabel className='d-sm-none d-inline-block' label='Qty' />
			<TextInput
				min={0}
				type='number'
				{...register(`items.${index}.quantity`, validations.quantity)}
				errors={validateItemErrors(errors ?? [], index, 'quantity')}
			/>
		</Fragment>
	);
};

export const Price = ({ index }) => {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<Fragment>
			<StyledLabel className='d-sm-none d-inline-block' label='Price' />
			<TextInput
				type='number'
				min={0}
				{...register(`items.${index}.price`, validations.price)}
				errors={validateItemErrors(errors ?? [], index, 'price')}
			/>
		</Fragment>
	);
};

export const Total = ({ index }) => {
	return (
		<Fragment>
			<StyledLabel className='d-sm-none d-inline-block' label='Total' />
			<br />
			<TotalValue index={index} />
		</Fragment>
	);
};

function TotalValue({ index }) {
	const { control, setValue } = useFormContext();
	const updatedPrice = useWatch({
		control,
		name: `items.${index}.price` || '',
	});

	const updatedQty = useWatch({
		control,
		name: `items.${index}.quantity` || '',
	});

	const updatedTotal = useMemo(
		() => (+updatedPrice ?? 0) * (+updatedQty ?? 0),
		[updatedPrice, updatedQty],
	);

	useEffect(() => {
		if (updatedTotal >= 0) {
			setValue(`items.${index}.total`, updatedTotal);
		}
	}, [index, setValue, updatedTotal]);
	return <StyledLabel className='totalvalue mt-2' label={updatedTotal} />;
}
