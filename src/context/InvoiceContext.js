import { createContext, useContext, useState, useMemo } from 'react';
import { getInvoiceData } from './helper';

const InvoiceContext = createContext({ invoices: [] });

export const InvoiceContextProvider = ({ children }) => {
	const [invoices] = useState(getInvoiceData);
	const invoiceids = useMemo(
		() => invoices.map((invoice) => invoice.id),
		[invoices],
	);
	return (
		<InvoiceContext.Provider
			value={{ invoices: invoices, invoiceids: invoiceids }}
		>
			{children}
		</InvoiceContext.Provider>
	);
};

export const useInvoices = () => useContext(InvoiceContext);
