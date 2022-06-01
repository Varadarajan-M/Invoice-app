import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from './../lib/components/Text';
import ItemList from './ItemList';
import {
	ClientEmail,
	ClientName,
	Description,
	FromCity,
	FromCountry,
	FromPostCode,
	FromStreetAddress,
	InvoiceDate,
	PaymentTerms,
	ToCity,
	ToCountry,
	ToPostCode,
	ToStreetAddress,
} from './Fields';

function Form({ defaultDate, defaultPaymentTerm }) {
	return (
		<div className='content-form'>
			<Text className='text-primary fw-bold'>Bill From</Text>
			<Row>
				<Col className='mt-2'>
					<FromStreetAddress />
				</Col>
			</Row>

			<Row className='mt-4'>
				<Col sm={6} lg={4} xs={6}>
					<FromCity />
				</Col>
				<Col sm={6} lg={4} xs={6}>
					<FromPostCode />
				</Col>

				<Col sm={12} lg={4} xs={12} className='mt-4 mt-lg-0'>
					<FromCountry />
				</Col>
			</Row>
			<Row className='mt-4'>
				<Text className='text-primary fw-bold'>Bill To</Text>
			</Row>
			<Row>
				<Col className='mt-3'>
					<ClientName />
				</Col>
			</Row>
			<Row>
				<Col className='mt-3'>
					<ClientEmail />
				</Col>
			</Row>
			<Row>
				<Col className='mt-3'>
					<ToStreetAddress />
				</Col>
			</Row>

			<Row className='mt-4'>
				<Col sm={6} lg={4} xs={6}>
					<ToCity />
				</Col>

				<Col sm={6} lg={4} xs={6}>
					<ToPostCode />
				</Col>

				<Col sm={12} lg={4} xs={12} className='mt-4 mt-lg-0'>
					<ToCountry />
				</Col>
			</Row>
			<Row className='mt-4'>
				<Col>
					<InvoiceDate defaultDate={defaultDate} />
				</Col>
				<Col>
					<PaymentTerms defaultPaymentTerm={defaultPaymentTerm} />
				</Col>
			</Row>
			<Row>
				<Col className='mt-4'>
					<Description />
				</Col>
			</Row>
			<Row>
				<Col className='mt-4'>
					<Text
						className='text-secondary fw-bold'
						style={{ fontSize: '1.30rem' }}
					>
						ItemList
					</Text>
				</Col>
			</Row>

			<ItemList />
		</div>
	);
}

export default Form;
