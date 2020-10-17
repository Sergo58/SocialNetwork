import React from "react"
import {UsersPageType, UsersType} from "../../Redux/users-reducer";
import styles from "./users.module.css"
import axios from 'axios'
import userPhoto from "../../ets/images/userPhoto.jpg"

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void

}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
    })
}

    render() {
        return <div>

            {

                this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt=""/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        this.props.unFollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Follow</button>}

                </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{"u.location.country"}</div>
                     <div>{"u.location.city"}</div>
                </span>
            </span>
                </div>)
            }


        </div>
    }
}