import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/UIcontext';

export const MenuItemComponent = ({ onClick, children, style }) => {
	return (
		<MenuItem style={style} onClick={onClick}>
			{children}
		</MenuItem>
	);
};

MenuItemComponent.propTypes = {
	content: PropTypes.string,
	onClick: PropTypes.func,
};

export const MenuComponent = (props) => {
	const { theme } = useTheme();
	const { anchorEl, handleClose, open, children, style } = props;
	return (
		<Menu
			id='fade-menu'
			MenuListProps={{
				'aria-labelledby': 'fade-button',
			}}
			anchorEl={(r) => anchorEl}
			open={open}
			onClose={handleClose}
			TransitionComponent={Fade}
			style={style}
			PaperProps={{
				elevation: 0,
				sx: {
					bgcolor: theme.menu.background,
					margin: '10px 10px 0 -20px',
					minWidth: '200px',
					transition: 'all 0.3s ease-in',
					borderRadius: '15px',
					boxShadow: 'rgba(72, 84, 159, 0.25) 0px 10px 20px',
				},
			}}
		>
			{children}
		</Menu>
	);
};

MenuComponent.propTypes = {
	style: PropTypes.object,
	anchorEl: PropTypes.object,
	handleClose: PropTypes.func,
	open: PropTypes.bool,
};
