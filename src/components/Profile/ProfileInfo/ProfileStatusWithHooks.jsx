import React, {useState, useEffect} from 'react';
import classes from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {setStatus(props.status)}, [props.status]); // как только изменятся пропсы сработает юзэффектб то есть мы зависим от статуса который придет в пропсах

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };


    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                    autoFocus={true}
                />
            </div>
            }

        </div>
    );
};


export default ProfileStatusWithHooks;