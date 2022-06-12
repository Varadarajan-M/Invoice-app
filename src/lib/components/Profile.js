import React, { useEffect } from 'react';
import '../../navbar/Navbar.scss';
import Backdrop from '@mui/material/Backdrop';
import Text from './Text';
import LinkIcon from '../../assets/images/icon-external-link.svg';
import Image from 'react-bootstrap/Image';
import Duo from '../../assets/images/brb.png';

const links = {
	git: {
		repo: {
			text: 'View Git Repo',
			link: 'https://github.com/Varadarajan-M/Invoice-app',
		},

		ajay: {
			text: 'Ajay Srinivas',
			link: 'https://github.com/ajaysrinivas333',
		},
		vk: {
			text: 'Varadarajan M',
			link: 'https://github.com/Varadarajan-M',
		},
	},
	linkedin: {
		ajay: {
			text: 'Ajay Srinivas',
			link: 'https://www.linkedin.com/in/ajay-srinivas-a436231b4/',
		},
		vk: {
			text: 'Varadarajan M',
			link: 'https://www.linkedin.com/in/varadarajan-m-724512164/',
		},
	},
};

const StyledLink = ({ children, to, className, style }) => {
	return (
		<a
			href={to}
			target='_blank'
			className={className}
			style={{ textDecoration: 'none', ...style }}
			rel='noreferrer'
		>
			{' '}
			{children}
		</a>
	);
};

const Profile = ({ profileClick, onClose }) => {
	useEffect(() => {
		if (profileClick) {
			document.body.style.overflowY = 'hidden';
		}
		return () => (document.body.style.overflowY = 'auto');
	}, [profileClick]);

	return (
		<Backdrop
			open={profileClick}
			sx={{ zIndex: 1302, backdropFilter: 'blur(4px)' }}
			onClick={onClose}
		>
			<div
				style={{ zIndex: 1303 }}
				className='profile min-vh-100 min-vw-100  d-flex flex-column justify-content-center align-items-center'
			>
				<Image src={Duo} alt='duo' width={163} />
				<StyledLink
					to={links.git.repo.link}
					style={{ color: '#90ff02' }}
					className={'h5 mt-4'}
				>
					{links.git.repo.text}
					<Image src={LinkIcon} height='30' width='15' />
				</StyledLink>
				<Text className={'h4 mt-3 headings'}>LinkedIn</Text>
				<Text className={'d-flex'}>
					<StyledLink
						to={links.linkedin.ajay.link}
						className={'mx-1 h5 links'}
					>
						{links.linkedin.ajay.text}
					</StyledLink>
					/
					<StyledLink
						to={links.linkedin.vk.link}
						className={'mx-1 h5 links'}
					>
						{links.linkedin.vk.text}
					</StyledLink>
				</Text>
				<Text className={'h4 mt-3 headings'}> GitHub</Text>
				<Text className={'d-flex '}>
					<StyledLink
						to={links.git.ajay.link}
						className={'mx-1 h5 links'}
					>
						{links.git.ajay.text}
					</StyledLink>
					/
					<StyledLink
						to={links.git.vk.link}
						className={'mx-1 h5 links'}
					>
						{links.git.vk.text}
					</StyledLink>
				</Text>
			</div>
		</Backdrop>
	);
};

export default Profile;
