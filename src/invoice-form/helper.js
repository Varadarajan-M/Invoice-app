/* eslint-disable no-useless-escape */
export const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const formatInvoiceData = (formData) => {
  return {
    clientName: formData.clientName,
    clientEmail: formData.clientEmail,
    createdAt: formData.invoiceDate,
    senderAddress: {
      street: formData.fromStreetAddress,
      city: formData.fromCity,
      postCode: formData.fromPostcode,
      country: formData.fromCountry,
    },
    clientAddress: {
      street: formData.toStreetAddress,
      city: formData.toCity,
      postCode: formData.toPostcode,
      country: formData.toCountry,
    },
  };
};
