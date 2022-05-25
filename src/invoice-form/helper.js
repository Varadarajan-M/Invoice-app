import { formatDate, generateID, addToDate } from './../util';
import { EMAIL_REGEX } from './constants';

const calcInvoiceTotal = (itemList) => {
	const sum = itemList.reduce(
		(initSum, currentValue) => initSum + currentValue?.total,
		0,
	);
	return sum;
};

export const formatInvoiceData = (formData, invoiceids) => {
	const createdAt = formatDate(formData.invoiceDate, 'yy-mm-dd');
	const paymentTerms = Number(formData.paymentTerms.split(' ')[1] ?? 30);
	const paymentDue = formatDate(
		addToDate(createdAt, paymentTerms),
		'yy-mm-dd',
	);
	return {
		id: formData.id ?? generateID(invoiceids),
		clientName: formData.clientName ?? '',
		clientEmail: formData.clientEmail ?? '',
		createdAt: createdAt ?? '',
		paymentTerms,
		paymentDue,
		status: formData.status ?? 'pending',
		senderAddress: {
			street: formData.fromStreetAddress ?? '',
			city: formData.fromCity ?? '',
			postCode: formData.fromPostcode ?? '',
			country: formData.fromCountry ?? '',
		},
		clientAddress: {
			street: formData.toStreetAddress ?? '',
			city: formData.toCity ?? '',
			postCode: formData.toPostcode ?? '',
			country: formData.toCountry ?? '',
		},
		items: formData.items ?? [],
		total: calcInvoiceTotal(formData?.items ?? []),
	};
};

export const validateItemErrors = (arr, index, key) => {
	try {
		const val = arr?.items[index][key];
		if (val) {
			return val;
		}
	} catch (e) {
		return null;
	}
};

export const validations = Object.freeze({
	fromStreetAddress: {
		required: 'This field is required',
		minLength: {
			value: 3,
			message: 'Should be a minimum of 3 characters',
		},
	},
	fromCity: {
		required: 'This field is required',
		minLength: {
			value: 3,
			message: 'Should be a minimum of 3 characters',
		},
	},
	fromPostcode: {
		required: 'This field is required',
		minLength: {
			value: 4,
			message: 'Should be a minimum of 4 characters',
		},
	},
	fromCountry: {
		required: 'This field is required',
		minLength: {
			value: 2,
			message: 'Should be a minimum of 2 characters',
		},
	},
	clientName: { required: 'This field is required' },
	clientEmail: {
		required: 'This field is required',
		pattern: {
			value: EMAIL_REGEX,
			message: 'Invalid Email',
		},
	},

	toStreetAddress: {
		required: 'This field is required',
		minLength: {
			value: 3,
			message: 'Should be a minimum of 3 characters',
		},
	},

	toCity: {
		required: 'This field is required',
		minLength: {
			value: 3,
			message: 'Should be a minimum of 3 characters',
		},
	},

	toPostcode: {
		required: 'This field is required',
		minLength: {
			value: 4,
			message: 'Should be a minimum of 4 characters',
		},
	},
	toCountry: {
		required: 'This field is required',
		minLength: {
			value: 2,
			message: 'Should be a minimum of 2 characters',
		},
	},
	price: {
		required: 'This field is required',
	},
	quantity: {
		required: 'This field is required',
	},
	itemName: {
		required: 'This field is required',
	},
});
