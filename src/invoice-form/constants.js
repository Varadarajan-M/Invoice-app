/* eslint-disable no-useless-escape */
export const OPTION_LIST = [
	{
		value: 'Net 1 Day',
		selected: false,
	},
	{
		value: 'Net 7 Days',
		selected: true,
	},
	{
		value: 'Net 14 Days',
		selected: false,
	},
	{
		value: 'Net 30 Days',
		selected: false,
	},
];

export const DEFAULT_OPTION = OPTION_LIST[1];

export const EMAIL_REGEX =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const NEW_ITEM = Object.freeze({
	name: '',
	quantity: '',
	price: '',
	total: 0,
});
