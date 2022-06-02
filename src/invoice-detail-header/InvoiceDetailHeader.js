import './InvoiceDetailHeader.scss';
import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Text from '../lib/components/Text';
import { useTheme } from '../context/UIcontext';
import { useInvoices } from '../context/InvoiceContext';

export const InvoiceActionButtons = React.memo(({ id, status, onEdit }) => {
	const { theme, mode } = useTheme();
	const { markAsPaid } = useInvoices();
	return (
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
			{status !== 'paid' && (
				<Button
					onClick={() => markAsPaid(id)}
					className={`paid ${mode}`}
				>
					{' '}
					Mark As Paid
				</Button>
			)}
		</div>
	);
});

const InvoiceDetailHeader = React.memo(({ id, status, onEdit }) => {
	const { theme, mode } = useTheme();

	return (
		<header className='invoice-detail-header'>
			<Card className='menu-card' style={{ ...theme.invoiceCard }}>
				{/* Status */}

				<div className='status-wrapper d-flex align-items-center'>
					<Text className={`status-text ${mode}`}>Status</Text>

					<div className={`invoice-status ${status} ${mode}`}>
						<span className='dot'></span>
						<Text>{status}</Text>
					</div>
				</div>

				{/* Action Buttons */}
				<InvoiceActionButtons id={id} status={status} onEdit={onEdit} />
			</Card>
		</header>
	);
});

export default InvoiceDetailHeader;
