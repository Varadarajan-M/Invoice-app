import { createContext, useState, useEffect, useContext } from 'react';
import { getTheme, setTheme as setLocalTheme } from './helper';

const themes = {
	lightMode: {
		body: { background: 'rgb(248, 248, 251)' },
		navbar: { background: 'rgb(55, 59, 83)' },
	},
	darkMode: {
		body: { background: 'rgb(20, 22, 37)' },
		navbar: { background: 'rgb(30, 33, 57)' },
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
