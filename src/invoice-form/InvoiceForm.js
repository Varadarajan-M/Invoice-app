import React from 'react';
import './InvoiceForm.scss';
import { useMemo } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '../context/UIcontext';
import Text from '../lib/components/Text';
import Button from '../lib/components/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />;
});

const InvoiceForm = (props) => {
	const { theme } = useTheme();
	const { onBackDropClick, open, className, title } = props;
	const classes = useMemo(
		() => `invoice-form ${className ?? ''}`,
		[className],
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

				<div className='invoice-form-children'>Form here</div>

				<div className='invoice-form-buttons'>
					<Button
						onClick={onBackDropClick}
						style={{ width: '100px' }}
					>
						{' '}
						Close
					</Button>
				</div>
			</Dialog>
		</div>
	);
};

export default InvoiceForm;
