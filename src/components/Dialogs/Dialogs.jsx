import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} id={message.id}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
    );
};

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;