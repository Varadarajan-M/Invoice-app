import { createContext, useContext, useState } from "react";
import { getInvoiceData } from "./helper";

const InvoiceContext = createContext({ invoices: [] });

export const InvoiceContextProvider = ({ children }) => {
  const [invoices] = useState(getInvoiceData);
  return (
    <InvoiceContext.Provider value={{ invoices: invoices }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoices = () => useContext(InvoiceContext);
