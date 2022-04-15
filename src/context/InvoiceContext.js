import { createContext, useContext } from 'react';

/*
 TODO  : Create a json file with default values

 TODO  : Create a function which gets the default invoices values
function -> check for localstorage invoices value... 
if its undefined return default data in json file

*/

// TODO : Set Defaultvalues as provided in json
const InvoiceContext = createContext({ invoices: [] });

export const InvoiceContextProvider = ({ children }) => {
	return (
		<InvoiceContext.Provider value={{ invoices: [] }}>
			{children}
		</InvoiceContext.Provider>
	);
};

export const useInvoices = () => useContext(InvoiceContext);
