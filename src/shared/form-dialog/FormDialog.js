import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './styles.css';

export default function FormDialog ({ open, handleClose }) {
    return (
        <Dialog open = { open } onClose = { handleClose }>
            <DialogContent>
                <div className = { "DialogContent" }>
                    <span className = { "Title" }>Записаться на прием прямо сейчас!</span>
                    <span className = { "SubTitle" }>Просто введите свои данные и наш менеджер свяжется с Вами</span>
                    <form action = 'https://formspree.io/healthyview357@gmail.com' method = 'POST'>
                        <input required name = 'name' placeholder = 'Имя' type = 'text' />
                        <input required name = 'number' placeholder = 'Номер телефона: +380631234567' type = 'tel' />
                        <input required name = 'email' placeholder = 'E-mail' type = 'email' />
                        <button className = { "Button" } type = 'submit'>Отправить</button>
                    </form>
                    <span className = { "Footer" }>
                      Отправляя форму вы соглашаетесь на сбор и обработку персональных данных
                    </span>
                </div>
            </DialogContent>
        </Dialog>
    );
}
