import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
    <div>
        <div>
            <img src="https://i.mycdn.me/image?id=887811879088&ts=000000000000b303ae&plc=WEB&tkn=*LgV_StN1kbinDLlMPUikx_HeW8M&fn=sqr_288"/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>
    </div>
    );
};
export default ProfileInfo;