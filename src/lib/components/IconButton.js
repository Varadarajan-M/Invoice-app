import React from 'react';
import Image from 'react-bootstrap/Image';
const style = {
	borderRadius: '50%',
	width: 50,
	height: 50,
	outline: 'none',
	border: 'none',
};
function IconButton(props) {
	return (
		<button style={style}>
			<Image src={props.icon} />
		</button>
	);
}

export default IconButton;
