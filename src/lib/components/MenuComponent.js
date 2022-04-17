import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';

export const MenuItemComponent = ({ onClick, content }) => {
	return <MenuItem onClick={onClick}>{content}</MenuItem>;
};

MenuItemComponent.propTypes = {
	content: PropTypes.string,
	onClick: PropTypes.func,
};

export const MenuComponent = (props) => {
	const { anchorEl, handleClose, open, children } = props;
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
		>
			{children}
		</Menu>
	);
};

MenuComponent.propTypes = {
	anchorEl: PropTypes.object,
	handleClose: PropTypes.func,
	open: PropTypes.bool,
};
