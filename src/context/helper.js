import invoicedata from '../data/invoices.json';

// UI Context
export const getTheme = () => localStorage.getItem('theme') ?? 'light';

export const setTheme = (theme) => localStorage.setItem('theme', theme);

// Invoice Context
export const getInvoiceData = () => {
	const item = localStorage.getItem('invoicedata');
	if (item !== null && item !== undefined) {
		return JSON.parse(item) ?? [];
	}
	return invoicedata ?? [];
};

export const setInvoiceData = (data) => {
	localStorage.setItem('invoicedata', JSON.stringify(data));
};

export const getLoadedStatus = () => {
	const status = sessionStorage.getItem('loaded');
	return status === '1' ? true : false;
};

export const setLoadedStatus = () => {
	sessionStorage.setItem('loaded', '1');
};
