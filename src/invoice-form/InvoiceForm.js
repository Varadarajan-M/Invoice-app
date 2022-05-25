import React, { useMemo, useCallback, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useTheme } from '../context/UIcontext';
import { useInvoices } from '../context/InvoiceContext';
import Text from '../lib/components/Text';
import Form from 'react-bootstrap/Form';
import { useForm, FormProvider } from 'react-hook-form';
import FormContent from './FormContent';
import { formatInvoiceData } from './helper';
import { NEW_ITEM } from './constants';
import './InvoiceForm.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />;
});

const InvoiceForm = (props) => {
	const { theme, mode } = useTheme();
	const { invoiceids, addInvoice } = useInvoices();
	const { onBackDropClick, open, className, formMode } = props;
	const classes = useMemo(
		() => `invoice-form ${className ?? ''}`,
		[className],
	);
	const isCreateMode = useCallback(() => formMode === 'create', [formMode]);
	const isEditMode = useCallback(() => formMode !== 'create', [formMode]);

	const title = useMemo(
		() => (isCreateMode() ? 'Create Invoice' : 'Edit Invoice'),
		[isCreateMode],
	);

	const formData = useForm({
		mode: 'all',
		defaultValues: {
			items: [NEW_ITEM],
		},
	});

	const saveAsDraftHandler = () => {
		const formattedData = formatInvoiceData({
			...formData.getValues(),
			status: 'draft',
		});
		formData.reset();
		onBackDropClick();
		addInvoice(formattedData);
	};

	const discardHandler = () => {
		formData.reset();
		onBackDropClick();
	};

	const submitHandler = (data) =>
		addInvoice(formatInvoiceData(data, invoiceids));

	const {
		formState: { isSubmitSuccessful },
		reset,
	} = formData;
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
			onBackDropClick();
		}
	}, [isSubmitSuccessful, onBackDropClick, reset]);

	return (
		<Dialog
			className={classes}
			open={open}
			TransitionComponent={Transition}
			onClose={onBackDropClick}
			sx={{
				'.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
					boxShadow: 'none',
					borderTopRightRadius: '25px',
					borderBottomRightRadius: '25px',
					maxWidth: '100vw',
					transition: 'background 0.2s ease-in-out',
					backgroundColor: 'inherit',
				},
			}}
		>
			<FormProvider {...formData}>
				<Form
					className='exp-form'
					onSubmit={formData.handleSubmit(submitHandler)}
				>
					<header className='titlepart' style={{ ...theme.body }}>
						<DialogTitle
							className='invoice-form-title'
							style={{ ...theme.bwText }}
						>
							<Text>{title}</Text>
						</DialogTitle>
					</header>

					<main
						className='invoice-form-children'
						style={{ ...theme.body }}
					>
						<FormContent />
					</main>

					<footer
						className='invoice-form-buttons'
						style={{ ...theme.body }}
					>
						{
							<Button
								type='button'
								className={`start ${mode} ${
									isEditMode() ? 'editMode' : ''
								}`}
								onClick={discardHandler}
								style={{
									...theme.invoiceForm.buttons.discard,
									visibility: isCreateMode()
										? 'visible'
										: 'hidden',
								}}
							>
								{' '}
								Discard
							</Button>
						}

						<Button
							type='button'
							className={`mid ${mode}`}
							onClick={
								isCreateMode
									? saveAsDraftHandler
									: onBackDropClick
							}
							style={{
								...(isCreateMode()
									? theme.invoiceForm.buttons.draft
									: theme.invoiceForm.buttons.discard),
							}}
						>
							{isCreateMode() ? 'Save as Draft' : 'Cancel'}
						</Button>

						<Button
							type='submit'
							className={`end ${mode}`}
							style={{ ...theme.invoiceForm.buttons.save }}
						>
							{' '}
							{isCreateMode() ? 'Save & Send' : 'Save Changes'}
						</Button>
					</footer>
				</Form>
			</FormProvider>
		</Dialog>
	);
};

export default InvoiceForm;
