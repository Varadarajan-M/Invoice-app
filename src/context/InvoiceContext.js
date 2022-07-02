import {
	createContext,
	useContext,
	useState,
	useMemo,
	useCallback,
	useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
	getInvoiceData,
	setInvoiceData,
	getLoadedStatus,
	setLoadedStatus,
} from './helper';
import { isToday } from './../util';
import { toast } from 'react-toastify';

const InvoiceContext = createContext({ invoices: [] });

export const InvoiceContextProvider = ({ children }) => {
	const [invoices, setInvoices] = useState(getInvoiceData);
	const [activeFilter, setActiveFilter] = useState('All');
	const navigate = useNavigate();
	const invoiceids = useMemo(
		() => invoices.map((invoice) => invoice.id),
		[invoices],
	);
	const dueCount = useMemo(
		() => invoices.filter((invoice) => isToday(invoice?.paymentDue)).length,
		[invoices],
	);

	useEffect(() => {
		const alreadyLoaded = getLoadedStatus();
		if (!alreadyLoaded && dueCount > 0) {
			toast.info(`${dueCount} Invoice(s) Due Today!`);
		}
		!alreadyLoaded && setLoadedStatus();
	}, [dueCount]);

	// add invoice to list
	const addInvoice = useCallback(
		(invoice) => {
			setInvoiceData([invoice, ...getInvoiceData()]);
			/*
		At initial stage active filter will be All.
		So that the newly added invoice must be rendered
		into the screen.

		if activeFilter is not All,
		That means now we are applying some kinda filter.

		So now if we add a new invoice now...
		the status of that invoice must be equal to active filter
		for that invoice to be rendered to the screen.
		
		Otherwise the value will be stored and rendered only on refresh 
		or a matching filter change
		*/
			if (
				activeFilter === 'All' ||
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
		if (appliedFilter !== 'All') {
			const filteredInvoices = invoiceData.filter(
				(invoice) => invoice.status === appliedFilter.toLowerCase(),
			);
			setInvoices(filteredInvoices);
		} else {
			setInvoices(invoiceData);
		}
	}, []);

	const updateInvoicesWFilterReset = (data) => {
		setActiveFilter('All');
		setInvoices(data);
		setInvoiceData(data);
	};

	const updateInvoice = useCallback((updatedInvoice) => {
		const data = getInvoiceData().map((invoice) =>
			invoice.id === updatedInvoice.id ? updatedInvoice : invoice,
		);
		updateInvoicesWFilterReset(data);
	}, []);

	const markAsPaid = (id) => {
		const updatedData = getInvoiceData().map((invoice) =>
			invoice.id === id ? { ...invoice, status: 'paid' } : invoice,
		);
		updateInvoicesWFilterReset(updatedData);
	};

	const deleteInvoice = (id) => {
		const data = getInvoiceData().filter((invoice) => invoice.id !== id);
		updateInvoicesWFilterReset(data);
		navigate('/', { replace: true });
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
				deleteInvoice,
				activeFilter,
				setActiveFilter,
				dueCount,
			}}
		>
			{children}
		</InvoiceContext.Provider>
	);
};

export const useInvoices = () => useContext(InvoiceContext);
