import {
	createContext,
	useContext,
	useState,
	useMemo,
	useCallback,
} from 'react';
import { getInvoiceData, setInvoiceData } from './helper';

const InvoiceContext = createContext({ invoices: [] });

export const InvoiceContextProvider = ({ children }) => {
	const [invoices, setInvoices] = useState(getInvoiceData);
	const [activeFilter, setActiveFilter] = useState(null);

	const invoiceids = useMemo(
		() => invoices.map((invoice) => invoice.id),
		[invoices],
	);

	// add invoice to list
	const addInvoice = useCallback(
		(invoice) => {
			setInvoiceData([invoice, ...getInvoiceData()]);
			/*
		At initial stage active filter will be null.
		So that the newly added invoice must be rendered
		into the screen.

		if activeFilter is not null,
		That means now we are applying some kinda filter.

		So now if we add a new invoice now...
		the status of that invoice must be equal to active filter
		for that invoice to be rendered to the screen.
		
		Otherwise the value will be stored and rendered only on refresh 
		or a matching filter change
		*/
			if (
				!activeFilter ||
				invoice.status === activeFilter?.toLowerCase()
			) {
				setInvoices((previousInvoices) => [
					invoice,
					...(previousInvoices ?? {}),
				]);
			}
		},
		[activeFilter],
	);
	// filter invoices
	const filterInvoice = useCallback((appliedFilter) => {
		const invoiceData = getInvoiceData();
		const filteredInvoices = invoiceData.filter(
			(invoice) => invoice.status === appliedFilter.toLowerCase(),
		);
		setInvoices(filteredInvoices);
	}, []);

	const updateInvoice = useCallback((updatedInvoice) => {
		setActiveFilter(null);
		const data = getInvoiceData().map((invoice) =>
			invoice.id === updatedInvoice.id ? updatedInvoice : invoice,
		);
		setInvoices(data);
		setInvoiceData(data);
	}, []);

	const markAsPaid = (id) => {
		setActiveFilter(null);
		const updatedData = getInvoiceData().map((invoice) =>
			invoice.id === id ? { ...invoice, status: 'paid' } : invoice,
		);
		setInvoices(updatedData);
		setInvoiceData(updatedData);
	};

	return (
		<InvoiceContext.Provider
			value={{
				invoices,
				invoiceids,
				addInvoice,
				updateInvoice,
				markAsPaid,
				filterInvoice,
				activeFilter,
				setActiveFilter,
			}}
		>
			{children}
		</InvoiceContext.Provider>
	);
};

export const useInvoices = () => useContext(InvoiceContext);
