import React from 'react';

const Button = React.forwardRef(
	({ style, children, className, onClick, ...buttonProps }, ref) => {
		const classes = `${className ?? ''} custom-button`;
		return (
			<button
				ref={ref}
				onClick={onClick}
				className={classes}
				style={style}
				{...buttonProps}
			>
				{children}
			</button>
		);
	},
);

export default Button;
