import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { useTheme } from './../context/UIcontext';

const InvoiceDeleteDialog = ({ open, onDelete, onCancel, id }) => {
	const { theme, mode } = useTheme();
	const matches = useMediaQuery('(min-width:550px)');
	const buttonStyles = {
		width: '6rem',
		borderRadius: '20px',
		textTransform: 'none',
		fontWeight: '600',
		padding: '8px',
	};
	return (
		<Dialog
			transitionDuration={500}
			open={open}
			onBackdropClick={onCancel}
			sx={{
				'.MuiDialog-paper': {
					paddingBlock: '20px',
					width: matches ? '50vw' : 'auto',
					paddingInline: matches ? '20px' : '10px',
					maxWidth: '400px',
					minHeight: '260px',
					...theme.invoiceCard,
					transition: 'background 0.2s ease-in',
					borderRadius: '25px',
				},
			}}
		>
			<DialogTitle
				id='alert-dialog-title'
				style={{
					...theme.bwText,
					fontWeight: 600,
					fontSize: '25px',
					letterSpacing: '0.2px',
				}}
			>
				{'Confirm Deletion'}
			</DialogTitle>
			<DialogContent sx={{ padding: '11px 18px' }}>
				<DialogContentText
					id='alert-dialog-description'
					style={{ ...theme.greySilver }}
				>
					Are you sure you want to delete invoice {id}? This action
					cannot be undone.
				</DialogContentText>
			</DialogContent>
			<DialogActions className='d-flex justify-content-end '>
				<Button
					onClick={onCancel}
					className={mode}
					sx={{
						...theme.invoiceForm.buttons.discard,
						...buttonStyles,
						'&.light:hover': {
							background: 'rgb(223, 227, 250)',
						},
						'&.dark:hover': {
							background: '#fff',
						},
					}}
				>
					Close
				</Button>

				<Button
					sx={{
						background: 'rgb(236, 87, 87)',
						color: '#fff',
						...buttonStyles,
						'&:hover': {
							background: 'rgb(255, 151, 151)',
						},
					}}
					onClick={() => onDelete(id)}
				>
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default InvoiceDeleteDialog;
