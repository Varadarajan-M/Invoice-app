import './InvoiceDetailHeader.scss';
import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Text from '../lib/components/Text';
import { useTheme } from '../context/UIcontext';
import { useFormOpen } from '../invoice-form/hooks';
import InvoiceForm from './../invoice-form/InvoiceForm';

const InvoiceDetailHeader = React.memo(({ matchingInvoice }) => {
	const { theme, mode } = useTheme();
	const {
		formOpen,
		onOpen: onEdit,
		onClose: onBackDropClick,
	} = useFormOpen();
	return (
		<header className='invoice-detail-header'>
			<Card className='menu-card' style={{ ...theme.invoiceCard }}>
				{/* Status */}

				<div className='status-wrapper d-flex align-items-center'>
					<Text className={`status-text ${mode}`}>Status</Text>

					<div
						className={`invoice-status ${matchingInvoice.status} ${mode}`}
					>
						<span className='dot'></span>
						<Text>{matchingInvoice.status}</Text>
					</div>
				</div>

				{/* Action Buttons */}
				<div className={`menu-action-buttons ${mode}`}>
					<Button
						className={`edit ${mode}`}
						style={{ ...theme.invoiceForm.buttons.discard }}
						onClick={onEdit}
					>
						{' '}
						Edit
					</Button>
					<Button className={`delete ${mode}`}>Delete</Button>
					<Button className={`paid ${mode}`}> Mark As Paid</Button>
				</div>
			</Card>

			<InvoiceForm
				formMode='edit'
				open={formOpen}
				onBackDropClick={onBackDropClick}
				activeData={matchingInvoice}
			/>
		</header>
	);
});

export default InvoiceDetailHeader;
