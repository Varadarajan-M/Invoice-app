import React, { Fragment } from 'react';
import Image from 'react-bootstrap/Image';
import lightIcon from '../assets/images/icon-sun.svg';
import darkIcon from '../assets/images/icon-moon.svg';
import avatar from '../assets/images/brb.png';
import logo from '../assets/images/logo.svg';
import { useTheme } from '../context/UIcontext';
import './Navbar.scss';
import Profile from '../lib/components/Profile';
import { useFormOpen as useDialogOpen } from '../invoice-form/hooks';

const Navbar = () => {
	const { mode, theme, switchTheme } = useTheme();
	const { formOpen: dialogOpen, onOpen, onClose } = useDialogOpen();
	return (
		<Fragment>
			<nav style={{ ...theme.navbar }} className='custom-navbar'>
				<div className='brand-logo text-white'>
					<Image className='logo' src={logo} alt='logo' />
				</div>

				<div className='action-buttons'>
					<div className='switch-theme'>
						<Image
							src={mode === 'light' ? darkIcon : lightIcon}
							alt='theme-icon'
							height={22}
							onClick={switchTheme}
						/>
					</div>

					<div className='divider'></div>
					<div className='avatar-image'>
						<Image
							src={avatar}
							alt='theme-icon'
							height={40}
							width={40}
							style={{
								borderRadius: '50%',
								cursor: 'pointer',
							}}
							onClick={onOpen}
						/>
					</div>
				</div>
			</nav>
			<Profile profileClick={dialogOpen} onClose={onClose} />
		</Fragment>
	);
};

export default Navbar;
