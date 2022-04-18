import './_App.scss';
import Navbar from './navbar/Navbar';
import Dummypage from './pages/Dummypage';

import { useEffect } from 'react';
import { useTheme } from './context/UIcontext';
import { Route, Routes, Navigate } from 'react-router-dom';
import InvoicesHome from './pages/InvoicesHome';
import Wrapper from './lib/components/Wrapper';

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
				{/* All routes here */}
				<Wrapper>
					<Routes>
						<Route path='/' element={<InvoicesHome />} />
						<Route
							path='/invoices/:id'
							element={
								<Dummypage
									style={{
										marginLeft: '500px',
										marginTop: '50px',
									}}
									text='invoices'
								/>
							}
						/>
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</Wrapper>
			</header>
		</div>
	);
}

export default App;
