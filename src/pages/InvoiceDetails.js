import React from 'react';
import { useInvoices } from '../context/InvoiceContext';
import { useParams } from 'react-router-dom';

function InvoiceDetails(props) {
  const { invoices } = useInvoices();
  const { id } = useParams();
  const matching = invoices.filter((invoice) => invoice.id === id)[0];
  return (
    <div>
      <pre>{JSON.stringify(matching, null, 1)}</pre>
    </div>
  );
}

export default InvoiceDetails;
