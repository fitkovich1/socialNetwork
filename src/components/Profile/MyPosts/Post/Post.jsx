import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
        <span>{props.autor}</span>
        <img src='https://sumopaint.com/images/icon.png'/>
        {props.message}
        <div>
            <span>like</span>
            {props.likesCount}
        </div>
    </div>

};
export default Post;