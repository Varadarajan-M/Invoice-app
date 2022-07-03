import './_App.scss';
import Navbar from './navbar/Navbar';
import InvoiceDetails from './pages/InvoiceDetails';

import { useEffect } from 'react';
import { useTheme } from './context/UIcontext';
import { Route, Routes, Navigate } from 'react-router-dom';
import InvoicesHome from './pages/InvoicesHome';
import Wrapper from './lib/components/Wrapper';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
	const { mode, theme } = useTheme();
	useEffect(() => {
		const body = document.body;
		body.classList = '';
		body.classList.add(mode);
		body.style.background = theme.body.background;
	}, [mode, theme]);
	const location = useLocation();
	const isMobileScreen = useMediaQuery('(max-width:909px)');
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />

				{/* All routes here */}
				<Wrapper>
					<AnimatePresence exitBeforeEnter>
						<Routes location={location} key={location.pathname}>
							<Route path='/' element={<InvoicesHome />} />
							<Route
								path='/invoice/:id'
								element={<InvoiceDetails />}
							/>
							<Route
								path='*'
								element={<Navigate to='/' replace />}
							/>
						</Routes>
					</AnimatePresence>
				</Wrapper>
				<ToastContainer
					style={{
						marginBlock: '2px',
					}}
					theme={mode}
					position={isMobileScreen ? 'bottom-center' : 'top-center'}
				/>
			</header>
		</div>
	);
}

export default App;
