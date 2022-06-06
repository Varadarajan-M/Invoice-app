import React, { useMemo } from 'react';
import { useInvoices } from '../context/InvoiceContext';
import { useParams } from 'react-router-dom';
import { useTheme } from '../context/UIcontext';
import { Link } from 'react-router-dom';
import Text from '../lib/components/Text';
import Image from 'react-bootstrap/Image';
import InvoiceDetailHeader, {
  InvoiceActionButtons,
} from './../invoice-detail-header/InvoiceDetailHeader';
import arrowleftIcon from './../assets/images/icon-arrow-left.svg';
import { useFormOpen } from './../invoice-form/hooks';
import InvoiceForm from './../invoice-form/InvoiceForm';
import InvoiceDeleteDialog from '../invoice-detail-header/InvoiceDeleteDialog';
import InvoiceDetailBody from '../invoice-detail-body/InvoiceDetailBody';

function InvoiceDetails(props) {
  const { invoices, deleteInvoice } = useInvoices();
  const { theme } = useTheme();
  const { id } = useParams();
  const { formOpen, onOpen: onEdit, onClose: onBackDropClick } = useFormOpen();

  const {
    formOpen: dialogOpen,
    onOpen: onDelete,
    onClose: onCancel,
  } = useFormOpen();

  const matchingInvoice = useMemo(
    () => invoices.filter((invoice) => invoice.id === id)[0],
    [invoices, id]
  );

  return (
    <div className='w-100 invoice-detail-wrapper'>
      <Text>
        <Link to={`/`} style={{ textDecoration: 'none', ...theme.bwText }}>
          <Image src={arrowleftIcon} alt='arrow' className='me-4 mb-1' />
          Go back{' '}
        </Link>
      </Text>

      <InvoiceDetailHeader
        id={matchingInvoice.id ?? ''}
        status={matchingInvoice.status ?? ''}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <main
        className='invoice-details-body'
        style={{ ...theme.invoiceCard, minHeight: '200px' }}
      >
        {/* <pre>{JSON.stringify(matchingInvoice, null, 10)}</pre> */}
        <InvoiceDetailBody matchingInvoice={matchingInvoice}/>
      </main>

      <footer className='invoice-details-footer'>
        <InvoiceActionButtons
          id={matchingInvoice.id ?? ''}
          status={matchingInvoice.status ?? ''}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </footer>

      <InvoiceForm
        formMode='edit'
        open={formOpen}
        onBackDropClick={onBackDropClick}
        activeData={matchingInvoice}
      />

      <InvoiceDeleteDialog
        open={dialogOpen}
        onCancel={onCancel}
        onDelete={(id) => {
          onCancel();
          deleteInvoice(id);
        }}
        id={matchingInvoice.id ?? ''}
      />
    </div>
  );
}

export default InvoiceDetails;
