import React from 'react';
import { Invoices } from '../invoices/Invoices';
import InvoiceMenu from './../invoice-menu/InvoiceMenu';
const InvoicesHome = () => {
	return (
		<div className='invoice-home-container'>
			<InvoiceMenu />
			<Invoices />
		</div>
	);
};

export default InvoicesHome;
