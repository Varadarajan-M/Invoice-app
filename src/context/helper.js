import invoicedata from "../data/invoices.json";

// UI Context
export const getTheme = () => localStorage.getItem("theme") ?? "light";

export const setTheme = (theme) => localStorage.setItem("theme", theme);

// Invoice Context
export const getInvoiceData = () => {
  const item = localStorage.getItem("invoicedata");
  if (item !== null && item !== undefined) {
    return item;
  }
  return invoicedata;
};
