import React from 'react';

const Button = React.forwardRef(
	({ style, children, className, onClick }, ref) => {
		const classes = `${className ?? ''} custom-button`;
		return (
			<button
				ref={ref}
				onClick={onClick}
				className={classes}
				style={style}
			>
				{children}
			</button>
		);
	},
);

export default Button;
