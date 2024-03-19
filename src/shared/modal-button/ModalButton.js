import React, { Fragment } from 'react';
import cx from 'classnames';
import FormDialog from '../form-dialog';

import './styles.css';

export default function ModalButton ({ btnText, className }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Fragment>
            <button
                className = { cx("Button", className) }
                onClick = { () => setOpen(true) }>

                { btnText }
            </button>
            <FormDialog handleClose = { () => setOpen(false) } open = { open } />
        </Fragment>
    );
}
