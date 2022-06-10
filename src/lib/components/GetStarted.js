import React from 'react';
import Image from 'react-bootstrap/Image';
import EmptyImage from '../../assets/images/illustration-empty.svg';
import { useTheme } from '../../context/UIcontext';
import Text from './Text';
const GetStarted = ({ showHint }) => {
	const { theme } = useTheme();
	return (
		<div className='d-flex mt-3 flex-column justify-content-center w-100 align-items-center'>
			<Image style={{ transform: 'scale(1.2)' }} src={EmptyImage} />
			<Text style={{ ...theme.bwText }} className='h3 mt-5 fw-bold'>
				There is nothing here.
			</Text>
			<br />
			{showHint && (
				<Text
					className='h5 text-center'
					style={{ ...theme.greySilver }}
				>
					Create an invoice by clicking the
					<br />
					<strong>New</strong> button and get started.
				</Text>
			)}
		</div>
	);
};

export default GetStarted;
