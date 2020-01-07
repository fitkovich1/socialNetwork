import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.users}>
            <div className={styles.pages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.container}>
                        <div className={styles.usersAvatar}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                         className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {props.unfollow(u.id)}}>Unfollow </button>
                                    : <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {props.follow(u.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={styles.usersInfo}>
                            <div className={styles.fullNameAndStatus}>
                                <span>{u.name}</span>
                                <span>{u.status}</span>
                            </div>
                            <div className={styles.location}>
                                <span>{/*{"u.location.country"} */} Minsk</span>
                                <span>{/*{"u.location.city"}*/}Belarus</span>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;