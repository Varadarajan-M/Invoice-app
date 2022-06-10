import React, { Fragment } from 'react';
import StyledLabel from './../lib/components/StyledLabel';
import DeleteIcon from '../assets/images/icon-delete.svg';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from './../lib/components/Button';
import { NEW_ITEM } from './constants';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { useTheme } from '../context/UIcontext';
import { ItemName, Price, Quantity, Total } from './Fields';

export const ItemListHeadings = ({className}) => {

	return (
		<Row className={className}>
			<Col sm={4} lg={4} md={4} xs={12} className='mt-2'>
				<StyledLabel label='Item Name' />
			</Col>
			<Col xs={3} md={2} lg={2} sm={2} className='mt-2'>
				<StyledLabel label='Qty' />
			</Col>
			<Col xs={4} md={3} lg={3} sm={3} className='mt-2'>
				<StyledLabel label='Price' />
			</Col>
			<Col xs={3} md={2} lg={2} sm={2} className='mt-2'>
				<StyledLabel label='Total' />
			</Col>
		</Row>
	);
};

const Item = ({ index, remove, deleteEnabled }) => {
	return (
		<Row>
			<Col sm={4} lg={4} md={4} xs={12} className='mt-2'>
				<ItemName index={index} />
			</Col>

			<Col xs={3} md={2} lg={2} sm={2} className='mt-2'>
				<Quantity index={index} />
			</Col>

			<Col xs={4} md={3} lg={3} sm={3} className='mt-2'>
				<Price index={index} />
			</Col>
			<Col xs={3} md={2} lg={2} sm={2} className='mt-2'>
				<Total index={index} />
			</Col>
			<Col md={1} lg={1} sm={1} className='col mt-sm-1 mt-2'>
				<StyledLabel label='' />
				<br />
				<Image
					onClick={() => deleteEnabled && remove(index)}
					className='mt-3'
					src={DeleteIcon}
					style={{
						cursor: deleteEnabled ? 'pointer' : 'not-allowed',
						opacity: deleteEnabled ? 1 : 0.2,
					}}
				/>
			</Col>
		</Row>
	);
};

const ItemList = () => {
	const { control } = useFormContext();
	const { theme } = useTheme();
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'items',
	});
	return (
		<Fragment>
			<ItemListHeadings className={'d-sm-flex d-none'}/>
			<div className='item-list-wrapper'>
				{fields.map((field, index) => {
					return (
						<Item
							key={field.id}
							index={index}
							remove={remove}
							deleteEnabled={fields.length > 1}
						/>
					);
				})}
			</div>
			<Row>
				<Col xs={12} className='mt-4'>
					<Button
						type='button'
						className='w-100 m-0'
						style={{ ...theme.invoiceForm.buttons.addNewItem }}
						onClick={() => append(NEW_ITEM)}
					>
						+ Add New Item
					</Button>
				</Col>
			</Row>
		</Fragment>
	);
};

export default ItemList;
