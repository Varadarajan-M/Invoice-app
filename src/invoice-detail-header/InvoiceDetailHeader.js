import './InvoiceDetailHeader.scss';
import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Text from '../lib/components/Text';
import { useTheme } from '../context/UIcontext';

const InvoiceDetailHeader = React.memo(({ status }) => {
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
				<div className={`menu-action-buttons ${mode}`}>
					<Button
						className={`edit ${mode}`}
						style={{ ...theme.invoiceForm.buttons.discard }}
					>
						{' '}
						Edit
					</Button>
					<Button className={`delete ${mode}`}>Delete</Button>
					<Button className={`paid ${mode}`}> Mark As Paid</Button>
				</div>
			</Card>
		</header>
	);
});

export default InvoiceDetailHeader;
