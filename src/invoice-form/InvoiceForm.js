import React, { useMemo, useCallback, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useTheme } from '../context/UIcontext';
import { useInvoices } from '../context/InvoiceContext';
import Text from '../lib/components/Text';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import FormContent from './FormContent';
import { formatInvoiceData } from './helper';
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

	const {
		register,
		formState: { errors, isSubmitSuccessful },
		handleSubmit,
		control,
		getValues,
		setValue,
		reset,
	} = useForm({
		mode: 'all',
		defaultValues: {
			items: [
				{
					name: '',
					quantity: '',
					price: '',
					total: 0,
				},
			],
		},
	});

	const saveAsDraftHandler = () => {
		const formattedData = formatInvoiceData({
			...getValues(),
			status: 'draft',
		});
		reset();
		onBackDropClick();
		addInvoice(formattedData);
	};

	const discardHandler = () => {
		reset();
		onBackDropClick();
	};

	const submitHandler = (data) =>
		addInvoice(formatInvoiceData(data, invoiceids));

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
			onBackDropClick();
		}
	}, [isSubmitSuccessful, reset, onBackDropClick]);

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
			<Form className='exp-form' onSubmit={handleSubmit(submitHandler)}>
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
					<FormContent
						control={control}
						register={register}
						errors={errors}
						setValue={setValue}
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
							isCreateMode ? saveAsDraftHandler : onBackDropClick
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
		</Dialog>
	);
};

export default InvoiceForm;
