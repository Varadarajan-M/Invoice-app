import React, { useMemo } from 'react';
import { useInvoices } from '../context/InvoiceContext';
import { useParams } from 'react-router-dom';
import { useTheme } from '../context/UIcontext';
import { Link } from 'react-router-dom';
import Text from '../lib/components/Text';
import Image from 'react-bootstrap/Image';
import InvoiceDetailHeader from './../invoice-detail-header/InvoiceDetailHeader';
import arrowleftIcon from './../assets/images/icon-arrow-left.svg';

function InvoiceDetails(props) {
	const { invoices } = useInvoices();
	const { theme } = useTheme();
	const { id } = useParams();
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

			<InvoiceDetailHeader matchingInvoice={matchingInvoice ?? {}} />

			<main className='invoice-details-body bg-secondary'>
				Invoice Detail Body
			</main>
		</div>
	);
}

export default InvoiceDetails;
