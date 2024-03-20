import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './styles.css';

export default function FormDialog ({ open, handleClose }) {
    return (
        <Dialog open = { open } onClose = { handleClose }>
            <DialogContent>
                <div className = { "DialogContent" }>
                    <span className = { "Title" }>Записатися на прийом прямо зараз!</span>
                    <span className = { "SubTitle" }>Просто введіть свої дані та наш менеджер зв'яжеться з Вами</span>
                    <form action = 'https://formspree.io/healthyview357@gmail.com' method = 'POST'>
                        <input required name = 'name' placeholder = "Імʼя" type = 'text' />
                        <input required name = 'number' placeholder = 'Номер телефону: +380631234567' type = 'tel' />
                        <input required name = 'email' placeholder = 'E-mail' type = 'email' />
                        <button className = { "Button" } type = 'submit'>Відправити</button>
                    </form>
                    <span className = { "Footer" }>
                      Надсилаючи форму ви погоджуєтесь на збір та обробку персональних даних
                    </span>
                </div>
            </DialogContent>
        </Dialog>
    );
}
