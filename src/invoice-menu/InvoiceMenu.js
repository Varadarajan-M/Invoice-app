import './InvoiceMenu.scss';
import React from 'react';
import Text from './../lib/components/Text';
import Button from './../lib/components/Button';
import { useTheme } from './../context/UIcontext';
import Image from 'react-bootstrap/Image';
import plusIcon from './../assets/images/icon-plus.svg';
import InvoiceFilter from './InvoiceFilter';
import { useInvoices } from '../context/InvoiceContext';
import { getInvoiceString } from './helper';

const InvoiceMenu = React.memo((props) => {
	const { onAddNew } = props;
	const { theme } = useTheme();
	const { activeFilter, invoices } = useInvoices();

	return (
		<div className='invoice-menu-wrapper'>
			<div className='invoice-text-details d-flex flex-column'>
				<Text className='invoices-heading' style={{ ...theme.bwText }}>
					Invoices
				</Text>
				<Text
					className='invoice-count'
					style={{ ...theme.greySilver, fontWeight: 300 }}
				>
					{getInvoiceString(activeFilter, invoices?.length ?? 0)}
				</Text>
			</div>
			<div className='invoice-action-buttons d-flex'>
				{/* Filter Menu */}

				<InvoiceFilter />

				{/* Add New Invoice Button	 */}
				<Button
					onClick={onAddNew}
					style={{ color: 'white' }}
					className='add-new mt-2'
				>
					<span
						className='me-2 innercircle'
						style={{
							background: 'white',
							borderRadius: '60%',
							padding: '1px 8px',
							marginLeft: '5px',
							height: '27px',
						}}
					>
						<Image height={11} width={11} src={plusIcon} />
					</span>
					<span>New</span>
				</Button>
			</div>
		</div>
	);
});

export default InvoiceMenu;
