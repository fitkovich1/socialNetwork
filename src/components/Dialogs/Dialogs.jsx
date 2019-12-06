import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} id={message.id}/>);

    let newMessageElement = state.newMessageText;

    let onAddMessageClick = () => {
        props.addMessage();
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                    <textarea
                        value={newMessageElement}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'
                    />
                    </div>
                    <div>
                        <button onClick={onAddMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;