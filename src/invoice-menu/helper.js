export const FILTER_OPTIONS = [
	{
		name: 'Paid',
		value: 'Paid',
	},
	{
		name: 'Pending',
		value: 'Pending',
	},
	{
		name: 'Draft',
		value: 'Draft',
	},
	{
		name: 'All',
		value: 'All',
	},
];

export const getInvoiceString = (filter, invoicesLength) => {
	const countText = invoicesLength > 0 ? invoicesLength : 'no';

	const currStatus =
		filter !== 'All'
			? filter.toLowerCase()
			: invoicesLength === 0
			? ''
			: 'total';

	const auxVerb = invoicesLength === 1 ? 'is' : 'are';
	const invoiceText = invoicesLength === 1 ? 'invoice' : 'invoices';
	return `There ${auxVerb} ${countText} ${currStatus} ${invoiceText}.`;
};
