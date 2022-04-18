import React from 'react';
import Button from '@mui/material/Button';

const MenuButton = (props) => {
	const { onClick, id, open, children, ...rest } = props;
	return (
		<Button
			{...rest}
			disableElevation
			disableRipple
			disableFocusRipple
			disableTouchRipple
			id={id ?? ''}
			aria-controls={open && 'fade-menu'}
			aria-haspopup='true'
			aria-expanded={open && 'true'}
			onClick={onClick}
			style={{
				...rest.style,
				textTransform: 'none',
				borderRadius: '20px',
			}}
		>
			{children}
		</Button>
	);
};

export default MenuButton;
