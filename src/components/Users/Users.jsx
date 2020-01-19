import React from 'react';
import styles from "./Users.module.css";
import Paginator from "./Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount,
                 pageSize, users, followingInProgress, unfollow, follow, ...props}) => {
    return (
        <div className={styles.users}>
            <Paginator
                currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={followingInProgress}
                                     unfollow={unfollow}
                                     follow={follow}
                />)
            }
        </div>
    );
};

export default Users;