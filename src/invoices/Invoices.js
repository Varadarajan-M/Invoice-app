import { useInvoices } from '../context/InvoiceContext';
import Card from '@mui/material/Card';
import arrowRightIcon from '../assets/images/icon-arrow-right.svg';
import { formatDateToString } from '../util';
import './invoices.scss';
import { Image } from 'react-bootstrap';
import { useTheme } from '../context/UIcontext';
import Text from './../lib/components/Text';
import { Link } from 'react-router-dom';
export function Invoices() {
  const { invoices } = useInvoices();
  const { mode, theme } = useTheme();
  return (
    <div className='invoices-body'>
      {invoices.map((data, key) => {
        return (
          <Link
            to={`/invoice/${data.id}`}
            key={data.id}
            style={{ textDecoration: 'none' }}
          >
            <Card className='invoice-card' style={{ ...theme.invoiceCard }}>
              <div className='invoice-id' style={{ ...theme.bwText }}>
                <Text style={{ color: 'rgb(126, 136, 195)' }}>{'#'}</Text>
                <Text>{data.id}</Text>{' '}
              </div>
              <div className='invoice-due' style={{ ...theme.greyWhiteText }}>
                <Text>Due {formatDateToString(data.paymentDue)}</Text>
              </div>
              <div
                className='invoice-client'
                style={{ ...theme.greyWhiteText }}
              >
                <Text>{data.clientName}</Text>
              </div>
              <div className='invoice-total' style={{ ...theme.bwText }}>
                {'£'}
                <Text>{data.total.toLocaleString()}</Text>
              </div>
              <div
                className={`invoice-status ${data.status.toString()} ${mode}`}
              >
                <span className='dot'></span>
                <Text>{data.status} </Text>
              </div>
              <div className='arrow-right'>
                <Image src={arrowRightIcon} />
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
