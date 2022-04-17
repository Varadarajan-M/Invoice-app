import React from 'react';
import Button from '@mui/material/Button';

const MenuButton = (props) => {
	const { onClick, id, open, children, ...rest } = props;
	return (
		<Button
			id={id ?? ''}
			aria-controls={open && 'fade-menu'}
			aria-haspopup='true'
			aria-expanded={open && 'true'}
			onClick={onClick}
			{...rest}
		>
			{children}
		</Button>
	);
};

export default MenuButton;
