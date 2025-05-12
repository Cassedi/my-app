import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m =>
        <Message message={m.message}/>)

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addNewMessage();
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    dialogElements
                }
            </div>
            <div className={s.messages}>
                <textarea ref={newMessage}
                          onChange={onMessageChange}
                          value={props.state.newMessageText}></textarea>
                <div></div>
                <button onClick={addMessage}> Add Message</button>
                {
                    messagesElements
                }

            </div>

        </div>
    )
}

export default Dialogs;