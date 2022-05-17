/* eslint-disable no-useless-escape */
import { formatDate, generateID, addToDate } from './../util';
export const EMAIL_REGEX =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const formatInvoiceData = (formData, invoiceids) => {
	const createdAt = formatDate(formData.invoiceDate, 'yy-mm-dd');
	const paymentTerms = Number(formData.paymentTerms.split(' ')[1] ?? 30);
	const paymentDue = formatDate(
		addToDate(createdAt, paymentTerms),
		'yy-mm-dd',
	);
	return {
		id: formData.id ?? generateID(invoiceids),
		clientName: formData.clientName ?? '',
		clientEmail: formData.clientEmail ?? '',
		createdAt: createdAt ?? '',
		paymentTerms,
		paymentDue,
		status: formData.status ?? 'pending',
		senderAddress: {
			street: formData.fromStreetAddress ?? '',
			city: formData.fromCity ?? '',
			postCode: formData.fromPostcode ?? '',
			country: formData.fromCountry ?? '',
		},
		clientAddress: {
			street: formData.toStreetAddress ?? '',
			city: formData.toCity ?? '',
			postCode: formData.toPostcode ?? '',
			country: formData.toCountry ?? '',
		},
		items: formData.items ?? [],
	};
};
