import React, { Fragment } from 'react';
import Styles from './styles.scss';
import Price from './Price';
import DoublePrice from './DoublePrice';
import FormDialog from '../shared/form-dialog/FormDialog';

export default function Prices () {
    const [open, setOpen] = React.useState(false);

    return (
        <div className = { Styles.Prices }>
            <h2 className = { Styles.MainTitle }>Цены</h2>
            <div className = { Styles.PriceContainer }>
                <DoublePrice
                    complex = 'Курс из 10 процедур - 4500 грн'
                    once = 'Разовая процедура - 500 грн'
                    openDialog = { () => setOpen(true) }
                    title = 'LPG тело'
                />
                <DoublePrice
                    complex = 'Курс из 10 процедур - 3500 грн'
                    once = 'Разовая процедура - 400 грн'
                    openDialog = { () => setOpen(true) }
                    title = 'LPG лицо'
                />
            </div>
            <div className = { Styles.PriceContainer }>
                <Price
                    additional = '(PRESSENSA,PPC) 15 ml'
                    openDialog = { () => setOpen(true) }
                    price = { 1300 }
                    title = 'ЛИПОЛИТИК'
                />
                <Price
                    additional = '1 пробирка'
                    openDialog = { () => setOpen(true) }
                    price = { 1500 }
                    title = 'PRP'
                />
            </div>
            <div className = { Styles.PriceContainer }>
                <Price
                    openDialog = { () => setOpen(true) }
                    price = { 2100 }
                    title = 'КОСМЕТИКА  LPG'
                />
                <Price
                    openDialog = { () => setOpen(true) }
                    price = { 1500 }
                    title = 'БАДЫ LPG SYSTEM'
                />
            </div>
            <div className = { Styles.PriceContainer }>
                <Price
                    openDialog = { () => setOpen(true) }
                    price = { 500 }
                    title = 'LPG КОСТЮМ ORIGINAL'
                />
            </div>
            <FormDialog handleClose = { () => setOpen(false) } open = { open } />
        </div>
    );
}
