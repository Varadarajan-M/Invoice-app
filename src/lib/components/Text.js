import React from 'react';

const Text = ({ children, style, className }) => {
	const textStyles = {
		fontFamily: 'League Spartan, sans-serif',
		// transition: 'all 0.3s ease',
		// letterSpacing: '-1px',
	};
	return (
		<>
			<span className={className} style={{ ...textStyles, ...style }}>
				{children}
			</span>
		</>
	);
};

export default Text;
