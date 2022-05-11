import React from 'react';
import './InvoiceForm.scss';
import { useMemo, useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '../context/UIcontext';
import Text from '../lib/components/Text';
import Button from '@mui/material/Button';
import Form from './FormContent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='right' ref={ref} {...props} />;
});

const InvoiceForm = (props) => {
  const { theme, mode } = useTheme();
  const { onBackDropClick, open, className, formMode } = props;
  const classes = useMemo(() => `invoice-form ${className ?? ''}`, [className]);
  const isCreateMode = useCallback(() => formMode === 'create', [formMode]);
  const isEditMode = useCallback(() => formMode !== 'create', [formMode]);

  const title = useMemo(
    () => (isCreateMode() ? 'Create Invoice' : 'Edit Invoice'),
    [isCreateMode]
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
            transition: 'background 0.2s ease-in-out',
            ...theme.body,
          },
        }}
      >
        <DialogTitle className='invoice-form-title' style={{ ...theme.bwText }}>
          <Text>{title}</Text>
        </DialogTitle>

        <div className='invoice-form-children'>
          <Form />
        </div>

        <div className='invoice-form-buttons'>
          {
            <Button
              className={`start ${mode} ${isEditMode() ? 'editMode' : ''}`}
              onClick={onBackDropClick}
              style={{
                ...theme.invoiceForm.buttons.discard,
                visibility: isCreateMode() ? 'visible' : 'hidden',
              }}
            >
              {' '}
              Discard
            </Button>
          }

          <Button
            className={`mid ${mode}`}
            onClick={onBackDropClick}
            style={{
              ...(isCreateMode()
                ? theme.invoiceForm.buttons.draft
                : theme.invoiceForm.buttons.discard),
            }}
          >
            {isCreateMode() ? 'Save as Draft' : 'Cancel'}
          </Button>

          <Button
            className={`end ${mode}`}
            onClick={onBackDropClick}
            style={{ ...theme.invoiceForm.buttons.save }}
          >
            {' '}
            {isCreateMode() ? 'Save & Send' : 'Save Changes'}
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default InvoiceForm;
