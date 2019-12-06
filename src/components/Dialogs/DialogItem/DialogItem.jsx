import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src='https://www.robinwieruch.de/static/63fc17d2f237ae4c3f61073a0436cf81/2b1a3/banner.jpg'/>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;