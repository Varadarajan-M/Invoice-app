import { createContext, useState, useEffect, useContext } from 'react';
import { getTheme, setTheme as setLocalTheme } from './helper';

const themes = {
	lightMode: {
		body: { background: 'rgb(248, 248, 251)' },
		navbar: { background: 'rgb(55, 59, 83)' },
		bwText: { color: 'rgb(12, 14, 22)' },
		greyWhiteText: { color: 'rgb(136 ,142, 176)' },
		menu: { background: 'rgb(255,255,255)' },
		invoiceCard: { background: 'rgb(255,255,255)' },
		invoiceForm: {
			buttons: {
				discard: {
					background: 'rgb(249, 250, 254)',
					color: 'rgb(126, 136, 195)',
				},
				draft: {
					background: 'rgb(54, 59, 83)',
					color: 'rgb(136, 142, 176)',
				},
				save: {
					background: 'rgb(124, 93, 250)',
					color: '#fff',
				},

				addNewItem: {
					background: 'rgb(249, 250, 254)',
					color: 'rgb(126, 136, 195)',
				},
			},
			labels: {
				color: 'rgb(126, 136, 195)',
			},
			input: {
				background: 'black !important',
			},
		},
	},
	darkMode: {
		body: { background: 'rgb(20, 22, 37)' },
		navbar: { background: 'rgb(30, 33, 57)' },
		bwText: { color: 'rgb(255,255,255)' },
		greyWhiteText: { color: 'rgb(255,255,255)' },
		menu: { background: 'rgb(37, 41, 69)' },
		invoiceCard: { background: 'rgb(30, 33, 57)' },
		invoiceForm: {
			buttons: {
				discard: {
					background: 'rgb(37, 41, 69)',
					color: 'rgb(223, 227, 250)',
				},
				draft: {
					background: 'rgb(54, 59, 83)',
					color: 'rgb(223, 227, 250)',
				},
				save: {
					background: 'rgb(124, 93, 250)',
					color: '#fff',
				},
				addNewItem: {
					background: 'rgb(37, 41, 69)',
					color: 'rgb(223, 227, 250)',
				},
			},
			labels: {
				color: 'rgb(223, 227, 250)',
			},
			input: {
				background: 'black',
			},
		},
	},
};

export const UIcontext = createContext(themes);

export const UIContextProvider = ({ children }) => {
	const [mode, _setMode] = useState(getTheme);
	const [theme, _setTheme] = useState(themes.lightMode);

	useEffect(() => {
		mode === 'light'
			? _setTheme(themes.lightMode)
			: _setTheme(themes.darkMode);
		setLocalTheme(mode);
	}, [mode]);

	const switchTheme = () =>
		mode === 'dark' ? _setMode('light') : _setMode('dark');

	return (
		<UIcontext.Provider value={{ mode, switchTheme, theme }}>
			{children}
		</UIcontext.Provider>
	);
};

export const useTheme = () => useContext(UIcontext);
