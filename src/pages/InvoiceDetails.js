import React from 'react';
import { useInvoices } from '../context/InvoiceContext';
import { useParams } from 'react-router-dom';

function InvoiceDetails(props) {
	const { invoices } = useInvoices();
	const { id } = useParams();
	const matching = invoices.filter((invoice) => invoice.id === id)[0];
  
	return (
		<div className='w-100 invoice-detail-wrapper'>
			<span>Go back </span>

			<header className='invoice-detail-header bg-primary'>
				Invoice Details header
			</header>

			<main className='invoice-details-body bg-secondary'>
				Invoice Detail Body
			</main>
		</div>
	);
}

export default InvoiceDetails;
