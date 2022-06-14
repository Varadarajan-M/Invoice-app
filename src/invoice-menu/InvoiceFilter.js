import React, { Fragment, useState, useCallback, useMemo } from 'react';
import arrowdownIcon from './../assets/images/icon-arrow-down.svg';
import MenuButton from './../lib/components/MenuButton';
import Image from 'react-bootstrap/Image';
import { useTheme } from './../context/UIcontext';
import { useInvoices } from './../context/InvoiceContext';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { FILTER_OPTIONS } from './helper';
import {
  MenuComponent,
  MenuItemComponent,
} from './../lib/components/MenuComponent';
import RadioInput from './../lib/components/Radio';

const InvoiceFilter = React.memo(() => {
  const { theme } = useTheme();
  const { filterInvoice, activeFilter, setActiveFilter } = useInvoices();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const filterChangeHandler = useCallback(
    ({ target: { value } }) => {
      setActiveFilter(value);
      filterInvoice(value);
	  setAnchorEl(null);
    },
    [filterInvoice, setActiveFilter]
  );
  return (
    <Fragment>
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
                  value={option.value}
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
    </Fragment>
  );
});

export default InvoiceFilter;
