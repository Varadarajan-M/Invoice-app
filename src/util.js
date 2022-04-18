const generateString = (len = 1) => {
	let text = '';
	let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < len; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
};

const randomNum = () => Math.random().toString().substr(2, 4);

export const generateID = (list) => {
	const listSet = new Set(list);

	const _generateID = (set) => {
		const randomString = generateString(2);
		const finalString = randomString + randomNum();

		if (set.has(finalString)) {
			return _generateID(list);
		}

		return finalString;
	};

	return _generateID(listSet);
};
