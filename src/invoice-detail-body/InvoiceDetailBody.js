import React, { Fragment } from 'react';
import './InvoiceDetailBody.scss';
import { formatDateToString, joinKeys } from '../util';

const InvoiceDetailBody = ({ matchingInvoice }) => {
  const {
    id,
    description,
    senderAddress,
    createdAt,
    clientAddress,
    clientEmail,
    clientName,
    paymentDue,
  } = matchingInvoice;
  return (
    <Fragment>
      <div className='id-desc'>
        <p>{id}</p>
        <p>{description}</p>
      </div>
      <div className='from-address'>
        <p>From Address</p>
        <pre>{joinKeys(senderAddress)}</pre>
      </div>
      <div className='invoice-date'>
        <p>Invoice Date</p>
        <p>{formatDateToString(createdAt)}</p>
      </div>
      <div className='bill-to'>
        <p>Bill To</p>
        <p>{clientName}</p>
        <pre>{joinKeys(clientAddress)}</pre>
      </div>
      <div className='sent-to'>
        <p>Sent To</p>
        <p>{clientEmail} </p>
      </div>
      <div className='payment-due'>
        <p>Payment Due</p>
        <p>{formatDateToString(paymentDue)}</p>
      </div>
      {/* Total Amount */}
    </Fragment>
  );
};
export default InvoiceDetailBody;
