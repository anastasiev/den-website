import React, { Fragment } from 'react';
import Styles from './styles.scss';
import Price from './Price';
import FormDialog from '../shared/form-dialog/FormDialog';

export default function Prices () {
    const [open, setOpen] = React.useState(false);

    return (
        <div className = { Styles.Prices }>
            <h2 className = { Styles.MainTitle }>Цены</h2>
            <div className = { Styles.PriceContainer }>
                <Price
                    openDialog = { () => setOpen(true) }
                    price = { 500 }
                    title = 'LPG тело'
                    additional = 'разовая процедура'
                />
                <Price
                  openDialog = { () => setOpen(true) }
                  price = { 4500 }
                  title = 'LPG тело'
                  additional = 'курс из 10 процедур'
                />
            </div>
            <div className = { Styles.PriceContainer }>
              <Price
                openDialog = { () => setOpen(true) }
                price = { 400 }
                title = 'LPG лицо'
                additional = 'разовая процедура'
              />
              <Price
                openDialog = { () => setOpen(true) }
                price = { 3500 }
                title = 'LPG лицо'
                additional = 'курс из 10 процедур'
              />
            </div>
            <div className = { Styles.PriceContainer }>
                <Price
                    additional = '(PRESSENSA,PPC) 15 ml'
                    openDialog = { () => setOpen(true) }
                    price = { 1300 }
                    title = 'MESO ЛИПОЛИТИК'
                />
                <Price
                    openDialog = { () => setOpen(true) }
                    price = { 1500 }
                    title = 'PRP'
                />
            </div>
            <div className = { Styles.PriceContainer }>
              <Price
                openDialog = { () => setOpen(true) }
                price = { 70 }
                title = 'КОСМЕТИКА  LPG'
                currency='евро'
              />
              <Price
                openDialog = { () => setOpen(true) }
                price = { 50 }
                title = 'БАДЫ LPG SYSTEM'
                currency='евро'
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
