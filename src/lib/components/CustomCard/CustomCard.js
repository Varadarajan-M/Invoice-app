import React from 'react';
import './CustomCard.scss';
import { useMemo } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '../../../context/UIcontext';
import Text from './../Text';
import Button from './../Button';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='right' ref={ref} {...props} />;
});

// TODO : Add appropriate props and make it reusable
const CustomCard = (props) => {
	const { theme } = useTheme();
	const { children, onBackDropClick, open, className, title } = props;
	const classes = useMemo(
		() => `custom-card ${className ?? ''}`,
		[className],
	);
	return (
		<div>
			<Dialog
				className={classes}
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={onBackDropClick}
				sx={{
					'.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
						boxShadow: 'none',
						borderTopRightRadius: '25px',
						borderBottomRightRadius: '25px',
						maxWidth: '100vw',
						...theme.body,
					},
				}}
			>
				<DialogTitle
					className='custom-card-title'
					style={{ ...theme.bwText }}
				>
					<Text>{title}</Text>
				</DialogTitle>

				<div className='custom-card-children'>{children}</div>

				<div className='custom-card-buttons'>
					<Button
						onClick={onBackDropClick}
						style={{ width: '100px' }}
					>
						{' '}
						Close
					</Button>
				</div>
			</Dialog>
		</div>
	);
};

export default CustomCard;
