import { createContext, useContext, useState, useMemo } from 'react';
import { getInvoiceData, setInvoiceData } from './helper';

const InvoiceContext = createContext({ invoices: [] });

export const InvoiceContextProvider = ({ children }) => {
	const [invoices, setInvoices] = useState(getInvoiceData);
	const invoiceids = useMemo(
		() => invoices.map((invoice) => invoice.id),
		[invoices],
	);

	// add invoice to list
	const addInvoice = (invoice) => {
		setInvoices((previousInvoices) => [
			invoice,
			...(previousInvoices ?? {}),
		]);
		setInvoiceData([invoice, ...invoices]);
	};

	return (
		<InvoiceContext.Provider
			value={{
				invoices: invoices,
				invoiceids: invoiceids,
				addInvoice: addInvoice,
			}}
		>
			{children}
		</InvoiceContext.Provider>
	);
};

export const useInvoices = () => useContext(InvoiceContext);
