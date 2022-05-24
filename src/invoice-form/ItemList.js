import React, { Fragment, useMemo, useEffect } from 'react';
import StyledLabel from './../lib/components/StyledLabel';
import TextInput from './../lib/components/TextInput';
import DeleteIcon from '../assets/images/icon-delete.svg';
import { validateItemErrors } from './helper';
import { Image } from 'react-bootstrap';
import { useWatch } from 'react-hook-form';

const ItemListHeadings = () => {
	return (
		<div className='row d-sm-flex d-none'>
			<div className='col-sm-4 col-lg-4 col-md-4 col-12 mt-2'>
				<StyledLabel label='Item Name' />
			</div>
			<div className='col-sm-2 col-lg-2 col-md-2 col-3 mt-2'>
				<StyledLabel label='Qty' />
			</div>

			<div className='col-sm-3 col-lg-3 col-md-3 col-4 mt-2 '>
				<StyledLabel label='Price' />
			</div>
			<div className='col-sm-2 col-lg-2 col-md-2 col-3 mt-2'>
				<StyledLabel label='Total' />
			</div>
		</div>
	);
};

const Item = ({
	errors,
	register,
	index,
	control,
	setValue,
	remove,
	itemListLength,
}) => {
	const hasMorethanOneItem = useMemo(
		() => itemListLength > 1,
		[itemListLength],
	);
	return (
		<div className='row'>
			<div className='col-sm-4 col-lg-4 col-md-4 col-12 mt-2'>
				<StyledLabel
					className='d-sm-none d-inline-block'
					label='Item Name'
				/>
				<TextInput
					{...register(`items.${index}.name`, {
						required: 'This field is required',
					})}
					errors={validateItemErrors(errors ?? [], index, 'name')}
				/>
			</div>
			<div className='col-sm-2  col-lg-2 col-md-2 col-3 mt-2'>
				<StyledLabel className='d-sm-none d-inline-block' label='Qty' />

				<TextInput
					min={0}
					type='number'
					{...register(`items.${index}.quantity`, {
						required: 'This field is required',
					})}
					errors={validateItemErrors(errors ?? [], index, 'quantity')}
				/>
			</div>

			<div className='col-sm-3 col-lg-3 col-md-3 col-4 mt-2 '>
				<StyledLabel
					className='d-sm-none d-inline-block'
					label='Price'
				/>

				<TextInput
					type='number'
					min={0}
					{...register(`items.${index}.price`, {
						required: 'This field is required',
					})}
					errors={validateItemErrors(errors ?? [], index, 'price')}
				/>
			</div>
			<div className='col-sm-2 col-lg-2 col-md-2 col-3 mt-2'>
				<StyledLabel
					className='d-sm-none d-inline-block'
					label='Total'
				/>
				<br />
				<TotalValue
					control={control}
					index={index}
					setValue={setValue}
				/>
			</div>
			<div className='col-sm-1 col-lg-1 col-md-1 col mt-sm-1 mt-2'>
				<StyledLabel label='' />
				<br />
				<Image
					onClick={() => hasMorethanOneItem && remove(index)}
					className='mt-3'
					src={DeleteIcon}
					style={{
						cursor: hasMorethanOneItem ? 'pointer' : 'not-allowed',
						opacity: hasMorethanOneItem ? 1 : 0.2,
					}}
				/>
			</div>
		</div>
	);
};

const ItemList = (props) => {
	const { control, register, errors, setValue, fields, remove } = props;
	return (
		<Fragment>
			{fields.length > 0 && <ItemListHeadings />}
			<div className='item-list-wrapper'>
				{fields.map((field, index) => {
					return (
						<Item
							key={field.id}
							errors={errors}
							register={register}
							index={index}
							control={control}
							setValue={setValue}
							remove={remove}
							itemListLength={fields.length}
						/>
					);
				})}
			</div>
		</Fragment>
	);
};

function TotalValue({ control, index, setValue }) {
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

export default ItemList;
