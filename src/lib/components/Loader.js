import React from 'react';
import { Backdrop } from '@mui/material';
import { useTheme } from '../../context/UIcontext';
import './Loading.scss';
export const LoaderComponent = () => {
	const { mode } = useTheme();
	return (
		<div
			className='d-flex justify-content-center align-items-center'
			style={{ width: '100%', height: '100%' }}
		>
			<div className={`lds-hourglass ${mode}`}></div>
		</div>
	);
};

export const Loader = () => {
	return (
		<Backdrop open={true}>
			<LoaderComponent />
		</Backdrop>
	);
};
