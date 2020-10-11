import React from "react"
import {UsersPageType, UsersType} from "../../Redux/users-reducer";
import styles from "./users.module.css"

type UsersPropsType={
    users:Array<UsersType>
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void

}

export function Users(props:UsersPropsType) {
if (props.users.length===0){
    props.setUsers(        [{id:1,fullName:"Sergo",photoUrl:"https://i.ucrazy.ru/files/pics/2015.09/1443584229_1443200397_istoricheskie_fotographii_15.jpg",followed:true,status:"I'm a boss",location:{city:"Ekaterinburg",country:"Russia"}},
        {id:2,fullName:"Vito",photoUrl:"https://i.ucrazy.ru/files/pics/2015.09/1443584229_1443200397_istoricheskie_fotographii_15.jpg",followed:false,status:"I'm a boss",location:{city:"Minsk",country:"Belarus"}},
        {id:3,fullName:"Pedro",photoUrl:"https://i.ucrazy.ru/files/pics/2015.09/1443584229_1443200397_istoricheskie_fotographii_15.jpg",followed:true,status:"I'm a boss",location:{city:"Moscow",country:"Russia"}},
        {id:4,fullName:"Pablo",photoUrl:"https://i.ucrazy.ru/files/pics/2015.09/1443584229_1443200397_istoricheskie_fotographii_15.jpg",followed:false,status:"I'm a boss",location:{city:"Kiev",country:"Ukrain"}},
        {id:5,fullName:"Fredo",photoUrl:"https://i.ucrazy.ru/files/pics/2015.09/1443584229_1443200397_istoricheskie_fotographii_15.jpg",followed:true,status:"I'm a boss",location:{city:"Tallin",country:"Estonia"}}])

}

    return <div>{
        props.users.map(u =><div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
                </div>
                <div>
                    {u.followed?<button onClick={()=>{props.unFollow(u.id)}} >Unfollow</button>:<button onClick={()=>{props.follow(u.id)}}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
    }



    </div>

}