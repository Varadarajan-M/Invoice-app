import React from 'react';
import { Image } from 'react-bootstrap';
import lightIcon from '../assets/images/icon-sun.svg';
import darkIcon from '../assets/images/icon-moon.svg';
import avatar from '../assets/images/github-pro.jpg';
import logo from '../assets/images/logo.svg';
import { useTheme } from '../context/UIcontext';
const Navbar = () => {
	const { mode, theme, switchTheme } = useTheme();
	return (
		<nav style={{ ...theme.navbar }} className='custom-navbar'>
			<div className='brand-logo text-white'>
				<Image className='logo' src={logo} alt='logo' />
			</div>

			<div className='action-buttons'>
				<div className='switch-theme'>
					<Image
						src={mode === 'light' ? darkIcon : lightIcon}
						alt='theme-icon'
						height={30}
						onClick={switchTheme}
					/>
				</div>
				<div className='divider'></div>
				<div className='avatar-image'>
					<Image
						src={avatar}
						alt='theme-icon'
						height={35}
						width={35}
						style={{
							borderRadius: '50%',
						}}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
