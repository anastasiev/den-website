import React, { Fragment } from 'react';
import cx from 'classnames';
import FormDialog from '../form-dialog';

import Styles from './styles.scss';

export default function ModalButton ({ btnText, className }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Fragment>
            <button
                className = { cx(Styles.Button, className) }
                onClick = { () => setOpen(true) }>

                { btnText }
            </button>
            <FormDialog handleClose = { () => setOpen(false) } open = { open } />
        </Fragment>
    );
}
