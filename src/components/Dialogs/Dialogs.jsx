import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d =>
        <DialogItem name={d.name}/>)

    let messagesElements = props.messages.map(m =>
        <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    dialogElements
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    )
}

export default Dialogs;