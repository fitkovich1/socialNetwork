import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 =  maxLengthCreator(50);

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name = "newMessageBody"
                    component={Textarea}
                    validate={[required, maxLength50]}
                    placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
export default AddMessageForm;