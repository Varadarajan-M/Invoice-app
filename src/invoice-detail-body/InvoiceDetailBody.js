import React, { Fragment } from 'react';
import Text from '../lib/components/Text'
import { formatDateToString, joinKeys } from '../util';
import { useTheme } from './../context/UIcontext';
import './InvoiceDetailBody.scss';


const Address = ({address}) => {
  const list = address.split('-');
  return(
    <>
      {
        list?.map(d => <><Text>{d}</Text><br/></>)
      }
    </>
  )
}


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
  const {theme} = useTheme();
  return (
    <Fragment>
      <div className='id-desc'>
        <p style={{...theme.bwText}}><span>#</span>{id}</p>
        <p style={{...theme.greySilver}}>{description}</p>
      </div>
      <div className='from-address'>
        <p style={{...theme.greySilver}}><Address address={joinKeys(senderAddress,'-')} /></p>
      </div>
      <div className='dates'>
      <div className='invoice-date'>
        <p style={{...theme.greySilver}}>Invoice Date</p>
        <p style={{...theme.bwText}}>{formatDateToString(createdAt)}</p>
      </div>
      <div className='payment-due'>
        <p style={{...theme.greySilver}}>Payment Due</p>
        <p style={{...theme.bwText}}>{formatDateToString(paymentDue)}</p>
        </div>
      </div>
      <div className='bill-to'>
        <p style={{...theme.greySilver}}>Bill To</p>
        <p style={{...theme.bwText}}>{clientName}</p>
        <p style={{...theme.greySilver}}><Address address={joinKeys(clientAddress,'-')} /></p>
     
      </div>
      <div className='sent-to'>
        <p style={{...theme.greySilver}}>Sent To</p>
        <p style={{...theme.bwText}}>{clientEmail} </p>
      </div>
     
      {/* Total Amount */}
    </Fragment>
  );
};
export default InvoiceDetailBody;
