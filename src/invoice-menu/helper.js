export const FILTER_OPTIONS = [
	{
		name: 'Paid',
	},
	{
		name: 'Pending',
	},
	{
		name: 'Draft',
	},
];

export const getInvoiceString = (filter, invoicesLength) => {
	const currStatus = filter ? filter.toLowerCase() : 'total';
	const countText = invoicesLength > 0 ? invoicesLength : 'no';
	const auxVerb = invoicesLength === 1 ? 'is' : 'are';
	const invoiceText = invoicesLength === 1 ? 'invoice' : 'invoices';
	return `There ${auxVerb} ${countText} ${currStatus} ${invoiceText}.`;
};
