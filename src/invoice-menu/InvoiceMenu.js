import './InvoiceMenu.scss';
import { useMemo, useState, useCallback } from 'react';
import Text from './../lib/components/Text';
import Button from './../lib/components/Button';
import MenuButton from './../lib/components/MenuButton';
import {
	MenuComponent,
	MenuItemComponent,
} from '../lib/components/MenuComponent';
import RadioInput from '../lib/components/Radio';
import { useTheme } from './../context/UIcontext';
import { useInvoices } from './../context/InvoiceContext';
import { Image } from 'react-bootstrap';
import arrowdownIcon from './../assets/images/icon-arrow-down.svg';
import plusIcon from './../assets/images/icon-plus.svg';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { FILTER_OPTIONS } from './helper';

const InvoiceMenu = (props) => {
	const { onAddNew } = props;
	const { theme } = useTheme();
	const { filterInvoice, activeFilter, setActiveFilter } = useInvoices();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

	const filterChangeHandler = useCallback(
		({ target: { value } }) => {
			setActiveFilter(value);
			filterInvoice(value);
		},
		[filterInvoice, setActiveFilter],
	);

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
					<span className='ms-3'>
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
					<FormControl className='w-100'>
						<RadioGroup
							aria-labelledby='radio-buttons-group-label'
							name='radio-buttons-group'
							onChange={filterChangeHandler}
							defaultValue={activeFilter ?? ''}
							value={activeFilter ?? ''}
						>
							{FILTER_OPTIONS.map((option, idx) => (
								<MenuItemComponent key={idx}>
									<RadioInput
										value={option.name}
										label={option.name}
										style={{
											padding: '5px 25px',
											textAlign: 'center',
											...theme.bwText,
										}}
									/>
								</MenuItemComponent>
							))}
						</RadioGroup>
					</FormControl>
				</MenuComponent>

				{/* Add New Invoice Button	 */}
				<Button
					onClick={onAddNew}
					style={{ color: 'white' }}
					className='add-new mt-2'
				>
					<span
						className='me-2 innercircle'
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
