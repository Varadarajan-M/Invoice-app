import useMediaQuery from '@mui/material/useMediaQuery';
import React, { Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ItemListHeadings } from '../invoice-form/ItemList';
import Text from '../lib/components/Text';
import { formatDateToString, joinKeys } from '../util';
import { useTheme } from './../context/UIcontext';
import './InvoiceDetailBody.scss';

const Address = ({ address }) => {
	const list = address.split('-');
	return (
		<>
			{list?.map((d, i) => (
				<React.Fragment key={i}>
					<Text>{d}</Text>
					<br />
				</React.Fragment>
			))}
		</>
	);
};

const InvoiceDetailBody = ({ matchingInvoice }) => {
	const isMediumScreen = useMediaQuery('(max-width:576px)');
	const {
		id,
		description,
		senderAddress,
		createdAt,
		clientAddress,
		clientEmail,
		clientName,
		paymentDue,
		items,
		total,
	} = matchingInvoice;
	const { theme } = useTheme();
	return (
		<Fragment>
			<div className='id-desc'>
				<p style={{ ...theme.bwText }}>
					<span>#</span>
					{id}
				</p>
				<p style={{ ...theme.greySilver }}>{description}</p>
			</div>
			<div className='from-address'>
				<p style={{ ...theme.greySilver }}>
					<Address address={joinKeys(senderAddress, '-')} />
				</p>
			</div>
			<div className='dates'>
				<div className='invoice-date'>
					<p style={{ ...theme.greySilver }}>Invoice Date</p>
					<p style={{ ...theme.bwText }}>
						{formatDateToString(createdAt)}
					</p>
				</div>
				<div className='payment-due'>
					<p style={{ ...theme.greySilver }}>Payment Due</p>
					<p style={{ ...theme.bwText }}>
						{formatDateToString(paymentDue)}
					</p>
				</div>
			</div>
			<div className='bill-to'>
				<p style={{ ...theme.greySilver }}>Bill To</p>
				<p style={{ ...theme.bwText }}>{clientName}</p>
				<p style={{ ...theme.greySilver }}>
					<Address address={joinKeys(clientAddress, '-')} />
				</p>
			</div>
			<div className='sent-to'>
				<p style={{ ...theme.greySilver }}>Sent To</p>
				<p style={{ ...theme.bwText }}>{clientEmail} </p>
			</div>

			<div
				className='itemlist-wrapper'
				style={{
					...theme.itemListwrapper,
				}}
			>
				<div
					style={{
						padding: !isMediumScreen ? '30px' : '30px 0',
					}}
				>
					{!isMediumScreen && <ItemListHeadings />}
					{items.map((item, index) => {
						return (
							<Row
								key={index}
								className={`item-row ${
									isMediumScreen
										? 'd-flex justify-content-evenly'
										: ''
								}`}
							>
								<Col
									sm={4}
									lg={4}
									md={4}
									xs={isMediumScreen ? 6 : 12}
									style={{ ...theme.bwText }}
								>
									<Text>{item.name}</Text>
								</Col>
								{!isMediumScreen && (
									<>
										<Col
											xs={3}
											md={2}
											lg={2}
											sm={2}
											style={{ ...theme.greyWhiteText }}
										>
											{item.quantity}
										</Col>
										<Col
											xs={4}
											md={3}
											lg={3}
											sm={3}
											style={{ ...theme.greyWhiteText }}
										>
											<Text>
												{item.price > 0 &&
													'£' +
														item.price.toLocaleString()}
											</Text>
										</Col>
									</>
								)}
								<Col
									xs={3}
									md={3}
									lg={3}
									sm={isMediumScreen ? 4 : 3}
									style={{ ...theme.bwText }}
								>
									<Text>
										{'£' + item.total.toLocaleString()}
									</Text>
								</Col>
							</Row>
						);
					})}
				</div>

				<div
					className={`amount w-100 p-4 d-flex ${
						isMediumScreen ? 'justify-content-evenly' : ''
					}`}
					style={{
						...theme.itemListwrapperAmount,
						borderBottomLeftRadius: 'inherit',
						borderBottomRightRadius: 'inherit',
					}}
				>
					<div
						className={`text col-sm-9 ms-sm-2 ${
							isMediumScreen ? 'col-9 ' : ''
						}`}
					>
						<Text>Amount Due </Text>
					</div>
					<div
						className={`total-amount col-sm-2 ms-sm-3 ${
							isMediumScreen ? 'col-3' : ''
						}`}
					>
						<Text>{'£' + total.toLocaleString() ?? 0}</Text>
					</div>
				</div>
			</div>
			{/* Total Amount */}
		</Fragment>
	);
};
export default InvoiceDetailBody;
