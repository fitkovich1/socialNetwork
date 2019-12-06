import React from 'react';
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component{


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render () {
        return (
            <div className={styles.users}>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={styles.container}>
                            <div className={styles.usersAvatar}>
                                <div>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow </button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button>
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
    }
};

    export default Users;