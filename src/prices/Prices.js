import React, { Fragment } from 'react';
import './styles.css';
import Price from './Price';
import DoublePrice from './DoublePrice';
import FormDialog from '../shared/form-dialog/FormDialog';

export default function Prices () {
    const [open, setOpen] = React.useState(false);

    return (
        <div className = { "Prices" }>
            <h2 className = { "MainTitle" }>Ціни</h2>
            <div className = { "PriceContainer" }>
                <DoublePrice
                    complex = 'Курс із 10 процедур - 5500 грн'
                    once = 'Разова процедура - 600 грн'
                    openDialog = { () => setOpen(true) }
                    title = 'LPG тіло'
                />
                <DoublePrice
                    complex = 'Курс із 10 процедур - 5500 грн'
                    once = 'Разова процедура - 600 грн'
                    openDialog = { () => setOpen(true) }
                    title = 'LPG обличчя'
                />
            </div>
            <FormDialog handleClose = { () => setOpen(false) } open = { open } />
        </div>
    );
}
