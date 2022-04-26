import React, { useCallback, useState } from 'react';

import { Invoices } from '../invoices/Invoices';
import InvoiceForm from './../invoice-form/InvoiceForm';
import InvoiceMenu from './../invoice-menu/InvoiceMenu';

const InvoicesHome = () => {
	const [formOpen, setFormOpen] = useState(false);
	const onAddNew = useCallback(() => {
		setFormOpen(true);
	}, []);
	const onBackDropClick = useCallback(() => {
		setFormOpen(false);
	}, []);
	return (
		<div className='invoice-home-container'>
			<InvoiceMenu onAddNew={onAddNew} />

			<Invoices />
			<InvoiceForm
				open={formOpen}
				onBackDropClick={onBackDropClick}
				title='Create Invoice'
			/>
		</div>
	);
};

export default InvoicesHome;
