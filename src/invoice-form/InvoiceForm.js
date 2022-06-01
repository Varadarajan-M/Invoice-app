import React, { useMemo, useEffect } from 'react';
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
import {
	formatInvoiceData,
	getFormattedFormData,
	getPaymentTerms,
} from './helper';
import { DEFAULT_OPTION, NEW_ITEM } from './constants';
import './InvoiceForm.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />;
});

const InvoiceForm = (props) => {
	const { theme, mode } = useTheme();
	const { invoiceids, addInvoice, updateInvoice } = useInvoices();
	const { onBackDropClick, open, className, formMode, activeData } = props;

	const formattedData = useMemo(
		() => getFormattedFormData(activeData),
		[activeData],
	);
	const classes = useMemo(
		() => `invoice-form ${className ?? ''}`,
		[className],
	);
	const isCreateMode = useMemo(() => formMode === 'create', [formMode]);
	const isEditMode = useMemo(() => formMode !== 'create', [formMode]);

	const title = useMemo(
		() => (isCreateMode ? 'Create Invoice' : `${activeData.id}`),
		[isCreateMode, activeData],
	);

	const formData = useForm({
		mode: 'all',
		defaultValues: isEditMode ? formattedData : { items: [NEW_ITEM] },
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
		isCreateMode
			? addInvoice(formatInvoiceData(data, invoiceids))
			: updateInvoice(formatInvoiceData({ id: activeData.id, ...data }));

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

	useEffect(() => {
		formData.reset(formattedData);
		onBackDropClick();
	}, [formattedData, formData, onBackDropClick]);

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
							<Text>
								{' '}
								{isEditMode && (
									<Text>
										Edit{' '}
										<span
											style={{
												color: 'rgb(126, 136, 195)',
											}}
										>
											#
										</span>
									</Text>
								)}
								{title}
							</Text>
						</DialogTitle>
					</header>

					<main
						className='invoice-form-children'
						style={{ ...theme.body }}
					>
						<FormContent
							defaultDate={
								isCreateMode
									? new Date()
									: new Date(activeData.createdAt)
							}
							defaultPaymentTerm={
								isCreateMode
									? DEFAULT_OPTION
									: getPaymentTerms(
											activeData.paymentTerms.toString(),
									  )
							}
						/>
					</main>

					<footer
						className='invoice-form-buttons'
						style={{ ...theme.body }}
					>
						{
							<Button
								type='button'
								className={`start ${mode} ${
									isEditMode ? 'editMode' : ''
								}`}
								onClick={discardHandler}
								style={{
									...theme.invoiceForm.buttons.discard,
									visibility: isCreateMode
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
								...(isCreateMode
									? theme.invoiceForm.buttons.draft
									: theme.invoiceForm.buttons.discard),
							}}
						>
							{isCreateMode ? 'Save as Draft' : 'Cancel'}
						</Button>

						<Button
							type='submit'
							className={`end ${mode}`}
							style={{ ...theme.invoiceForm.buttons.save }}
						>
							{' '}
							{isCreateMode ? 'Save & Send' : 'Save Changes'}
						</Button>
					</footer>
				</Form>
			</FormProvider>
		</Dialog>
	);
};

export default InvoiceForm;
