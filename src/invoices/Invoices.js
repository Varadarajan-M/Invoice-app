import { useInvoices } from "../context/InvoiceContext";
import Card from "@mui/material/Card";
import { formatDate } from "../util";
export function Invoices() {
  const { invoices } = useInvoices();
  return (
    <div className="invoices-body">
      {invoices.map((data, key) => {
        return (
          <Card key={data.id} className="my-2">
            {data.id}
            {formatDate(data.paymentDue)}
            {data.clientName}£{data.total}
            {data.status}
          </Card>
        );
      })}
    </div>
  );
}
