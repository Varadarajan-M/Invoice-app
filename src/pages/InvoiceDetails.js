import React from 'react';
import { useInvoices } from '../context/InvoiceContext';
import { useParams } from 'react-router-dom';
import Text from '../lib/components/Text';
import { useTheme } from '../context/UIcontext';
import Image from 'react-bootstrap/Image';
import arrowleftIcon from './../assets/images/icon-arrow-left.svg';
import { Link } from 'react-router-dom';

function InvoiceDetails(props) {
  const { invoices } = useInvoices();
  const { theme } = useTheme();
  const { id } = useParams();
  const matching = invoices.filter((invoice) => invoice.id === id)[0];
  return (
    <div className='w-100 invoice-detail-wrapper'>
      <Text>
        <Link to={`/`} style={{ textDecoration: 'none', ...theme.bwText }}>
          <Image src={arrowleftIcon} alt='arrow' className='me-4 mb-1' />
          Go back{' '}
        </Link>
      </Text>

      <header className='invoice-detail-header bg-primary'>
        Invoice Details header
      </header>

      <main className='invoice-details-body bg-secondary'>
        Invoice Detail Body
      </main>
    </div>
  );
}

export default InvoiceDetails;
