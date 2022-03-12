import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../context/UIcontext';
const Navbar = () => {
	const { theme, switchTheme } = useTheme();
	return (
		<nav style={{ ...theme.navbar }} className='custom-navbar'>
			<div className='brand-logo text-white'>
				<p>Invoice App</p>
			</div>

			<div className='action-buttons'>
				<Button onClick={switchTheme}>Switch Theme</Button>
			</div>
		</nav>
	);
};

export default Navbar;
