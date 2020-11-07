import React from "react"
import styles from "./users.module.css";
import userPhoto from "../../ets/images/userPhoto.jpg";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UserType={
    onPageChanged:(currentPage:number)=>void
    users: Array<UsersType>
    totalUsersCount:number
    currentPage:number
    pageSize:number
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,

    followingInProgress:Array<number>
}

export let Users=(props:UserType)=> {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {


                // @ts-ignore
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })}

        </div>
        {

            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                             alt=""/>
                    </NavLink>

                </div>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.
                        some(id=>id===u.id)}  onClick={() => {
                 props.unFollow(u.id);


                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id=>id===u.id)}
                                  onClick={() => {
                         props.follow(u.id)

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
