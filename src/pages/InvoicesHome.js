import { Invoices } from '../invoices/Invoices';
import InvoiceForm from './../invoice-form/InvoiceForm';
import InvoiceMenu from './../invoice-menu/InvoiceMenu';
import { useFormOpen } from './../invoice-form/hooks';

const InvoicesHome = () => {
	const {
		formOpen,
		onOpen: onAddNew,
		onClose: onBackDropClick,
	} = useFormOpen();
	return (
		<div className='invoice-home-container'>
			<InvoiceMenu onAddNew={onAddNew} />

			<Invoices />
			<InvoiceForm
				formMode='create'
				open={formOpen}
				onBackDropClick={onBackDropClick}
			/>
		</div>
	);
};

export default InvoicesHome;
