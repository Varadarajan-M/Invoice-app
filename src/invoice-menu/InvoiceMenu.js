import { useMemo, useState } from 'react';
import Text from './../lib/components/Text';
import Button from './../lib/components/Button';
import MenuButton from './../lib/components/MenuButton';
import { useTheme } from './../context/UIcontext';
import { Image } from 'react-bootstrap';
import {
	MenuComponent,
	MenuItemComponent,
} from '../lib/components/MenuComponent';

import arrowdownIcon from './../assets/images/icon-arrow-down.svg';
import plusIcon from './../assets/images/icon-plus.svg';
import './InvoiceMenu.scss';
import CheckBox from '../lib/components/CheckBox';
const filterOptions = [
	{
		name: 'Paid',
	},
	{
		name: 'Pending',
	},
	{
		name: 'Draft',
	},
];

const InvoiceMenu = () => {
	const { theme } = useTheme();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
	return (
		<div className='invoice-menu-wrapper'>
			<div className='invoice-text-details d-flex flex-column'>
				<Text className='invoices-heading' style={{ ...theme.bwText }}>
					Invoices
				</Text>
				<Text
					className='invoice-count'
					style={{ ...theme.greyWhiteText }}
				>
					There are 7 total invoices.
				</Text>
			</div>
			<div className='invoice-action-buttons d-flex'>
				{/* Filter By Status Button */}

				<MenuButton
					id={'fade-menu'}
					style={{ ...theme.bwText }}
					className='filter-btn mt-2'
					onClick={(e) => setAnchorEl(e.currentTarget)}
					open={open}
				>
					<span className='filter'>Filter</span>
					<span className='mx-1'>
						<Image
							className={open ? 'up' : 'down'}
							src={arrowdownIcon}
							alt='arrow'
						/>
					</span>
				</MenuButton>

				{/* Filter Menu */}

				<MenuComponent
					open={open}
					anchorEl={anchorEl}
					handleClose={() => setAnchorEl(null)}
				>
					{filterOptions.map((option, idx) => (
						<MenuItemComponent
							key={idx}
							style={{
								padding: '5px 25px',
								textAlign: 'center',
								...theme.bwText,
							}}
						>
							<CheckBox
								value={option.name}
								defaultChecked={false}
							/>
							<span
								style={{
									transition: 'color 0.3s ease 0s',
									fontSize: '12.5px',
									letterSpacing: '-0.25px',
									fontWeight: 700,
								}}
							>
								{option.name}
							</span>
						</MenuItemComponent>
					))}
				</MenuComponent>

				{/* Add New Invoice Button	 */}
				<Button style={{ color: 'white' }} className='add-new mt-2'>
					<span
						className='me-2'
						style={{
							background: 'white',
							borderRadius: '60%',
							padding: '1px 8px',
							marginLeft: '5px',
							height: '27px',
						}}
					>
						<Image height={11} width={11} src={plusIcon} />
					</span>
					<span>New</span>
				</Button>
			</div>
		</div>
	);
};

export default InvoiceMenu;
