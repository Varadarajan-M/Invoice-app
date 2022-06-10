import { Invoices } from '../invoices/Invoices';
import InvoiceForm from './../invoice-form/InvoiceForm';
import InvoiceMenu from './../invoice-menu/InvoiceMenu';
import { useFormOpen } from './../invoice-form/hooks';
import { motion } from 'framer-motion';
import { home } from '../animations/variants';

const InvoicesHome = () => {
	const {
		formOpen,
		onOpen: onAddNew,
		onClose: onBackDropClick,
	} = useFormOpen();
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={home}
			className='invoice-home-container'
		>
			<InvoiceMenu onAddNew={onAddNew} />

			<Invoices />
			<InvoiceForm
				formMode='create'
				open={formOpen}
				onBackDropClick={onBackDropClick}
			/>
		</motion.div>
	);
};

export default InvoicesHome;
