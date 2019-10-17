import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Styles from './styles.scss';

export default function FormDialog ({ open, handleClose }) {
    return (
        <Dialog open = { open } onClose = { handleClose }>
            <DialogContent>
                <div className = { Styles.DialogContent }>
                    <span className = { Styles.Title }>Записаться на прием прямо сейчас!</span>
                    <span className = { Styles.SubTitle }>Просто введите свои данные и наш менеджер свяжется с Вами</span>
                    <form action = 'https://formspree.io/dmytro.anastasiev@gmail.com' method = 'POST'>
                        <input required name = 'text' placeholder = 'Имя' type = 'text' />
                        <input required name = 'number' placeholder = 'Номер телефона: +380631234567' type = 'tel' />
                        <input required name = 'email' placeholder = 'E-mail' type = 'email' />
                        <button className = { Styles.Button } type = 'submit'>Отправить</button>
                    </form>
                    <span className = { Styles.Footer }>
                      Отправляя форму вы соглашаетесь на сбор и обработку персональных данных
                    </span>
                </div>
            </DialogContent>
        </Dialog>
    );
}
