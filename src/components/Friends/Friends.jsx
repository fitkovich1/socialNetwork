import React from 'react';
import classes from './Friends.module.css';

const Friends = () => {

    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
            <div className={classes.imgName}>
                <img src="http://cm1.narvii.com/7137/82dfdf5249f75571554874c604090c0c3a261c1e_00.jpg" alt="Аватар"/>
                <div><span>Nima</span></div>
            </div>
            </div>
            <div className={classes.avatar}>
                <div className={classes.imgName}>
                    <img src="http://cm1.narvii.com/7137/82dfdf5249f75571554874c604090c0c3a261c1e_00.jpg" alt="Аватар"/>
                    <div><span>Kolya</span></div>
                </div>
            </div>
            <div className={classes.avatar}>
                <div className={classes.imgName}>
                    <img src="http://cm1.narvii.com/7137/82dfdf5249f75571554874c604090c0c3a261c1e_00.jpg" alt="Аватар"/>
                    <div><span>Ibragim</span></div>
                </div>
            </div>

        </div>
    )
};
export default Friends;