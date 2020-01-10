import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(post => <Post message={post.message}
                                                      likesCount={post.likesCount}
                                                      autor={post.autor}
                                                      id={post.id}/>);
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return <div className={classes.postsBlock}>
        <h3>my Posts</h3>

        <AddNewPostForm onSubmit={onAddPost}/>

        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>
});

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPostText"
                    component={Textarea}
                    placeholder={"Post message"}
                    validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
};

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


export default MyPosts;