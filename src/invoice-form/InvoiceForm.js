import React from 'react';
import './InvoiceForm.scss';
import { useMemo } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '../context/UIcontext';
import Text from '../lib/components/Text';
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />;
});

const InvoiceForm = (props) => {
	const { theme, mode } = useTheme();
	const { onBackDropClick, open, className, formMode } = props;
	const classes = useMemo(
		() => `invoice-form ${className ?? ''}`,
		[className],
	);
	const title = useMemo(
		() => (formMode === 'create' ? 'Create Invoice' : 'Edit Invoice'),
		[formMode],
	);

	return (
		<div>
			<Dialog
				className={classes}
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={onBackDropClick}
				sx={{
					'.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
						boxShadow: 'none',
						borderTopRightRadius: '25px',
						borderBottomRightRadius: '25px',
						maxWidth: '100vw',
						transition: 'background 0.2s ease-in-out',
						...theme.body,
					},
				}}
			>
				<DialogTitle
					className='invoice-form-title'
					style={{ ...theme.bwText }}
				>
					<Text>{title}</Text>
				</DialogTitle>

				{/* <div className='invoice-form-children'>Form here</div> */}

				<div className='invoice-form-buttons'>
					<Button
						className={`start ${mode}`}
						onClick={onBackDropClick}
						style={{
							...theme.invoiceForm.buttons.discard,
						}}
					>
						{' '}
						Close
					</Button>

					<Button
						className={`mid ${mode}`}
						onClick={onBackDropClick}
						style={{
							...theme.invoiceForm.buttons.draft,
						}}
					>
						{' '}
						Save as Draft
					</Button>

					<Button
						className={`end ${mode}`}
						onClick={onBackDropClick}
						style={{ ...theme.invoiceForm.buttons.save }}
					>
						{' '}
						Save and Send
					</Button>
				</div>
			</Dialog>
		</div>
	);
};

export default InvoiceForm;
