import './App.scss';
import Navbar from './navbar/Navbar';
import { useEffect } from 'react';
import { useTheme } from './context/UIcontext';

function App() {
	const { mode, theme } = useTheme();
	useEffect(() => {
		const body = document.body;
		body.classList = '';
		body.classList.add(mode);
		body.style.background = theme.body.background;
	}, [mode, theme]);

	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />
			</header>
		</div>
	);
}

export default App;
