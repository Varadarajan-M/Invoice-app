import React, { useCallback, useState } from 'react';
import { Invoices } from '../invoices/Invoices';
import CustomCard from '../lib/components/CustomCard/CustomCard';
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
			<CustomCard
				open={formOpen}
				onBackDropClick={onBackDropClick}
				title='Create Invoice'
			>

				
			</CustomCard>
		</div>
	);
};

export default InvoicesHome;
