import React, { useMemo } from 'react';
import { useInvoices } from '../context/InvoiceContext';
import { useParams } from 'react-router-dom';
import { useTheme } from '../context/UIcontext';
import { Link } from 'react-router-dom';
import Text from '../lib/components/Text';
import Image from 'react-bootstrap/Image';
import InvoiceDetailHeader, {
	InvoiceActionButtons,
} from './../invoice-detail-header/InvoiceDetailHeader';
import arrowleftIcon from './../assets/images/icon-arrow-left.svg';
import { useFormOpen } from './../invoice-form/hooks';
import InvoiceForm from './../invoice-form/InvoiceForm';

function InvoiceDetails(props) {
	const { invoices } = useInvoices();
	const { theme } = useTheme();
	const { id } = useParams();
	const {
		formOpen,
		onOpen: onEdit,
		onClose: onBackDropClick,
	} = useFormOpen();
	const matchingInvoice = useMemo(
		() => invoices.filter((invoice) => invoice.id === id)[0],
		[invoices, id],
	);

	return (
		<div className='w-100 invoice-detail-wrapper'>
			<Text>
				<Link
					to={`/`}
					style={{ textDecoration: 'none', ...theme.bwText }}
				>
					<Image
						src={arrowleftIcon}
						alt='arrow'
						className='me-4 mb-1'
					/>
					Go back{' '}
				</Link>
			</Text>

			<InvoiceDetailHeader
				id={matchingInvoice.id ?? ''}
				status={matchingInvoice.status ?? ''}
				onEdit={onEdit}
			/>

			<main
				className='invoice-details-body'
				style={{ ...theme.invoiceCard, minHeight: '200px' }}
			>
				<pre>{JSON.stringify(matchingInvoice, null, 10)}</pre>
			</main>

			<footer className='invoice-details-footer'>
				<InvoiceActionButtons
					id={matchingInvoice.id ?? ''}
					status={matchingInvoice.status ?? ''}
					onEdit={onEdit}
				/>
			</footer>

			<InvoiceForm
				formMode='edit'
				open={formOpen}
				onBackDropClick={onBackDropClick}
				activeData={matchingInvoice}
			/>
		</div>
	);
}

export default InvoiceDetails;
