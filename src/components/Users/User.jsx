import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return (<div>
            <div className={styles.container}>
                <div className={styles.usersAvatar}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow </button>
                            : <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
                        }
                    </div>
                </div>
                <div className={styles.usersInfo}>
                    <div className={styles.fullNameAndStatus}>
                        <span>{user.name}</span>
                        <span>{user.status}</span>
                    </div>
                    <div className={styles.location}>
                        <span>{/*{"u.location.country"} */} Minsk</span>
                        <span>{/*{"u.location.city"}*/}Belarus</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User;