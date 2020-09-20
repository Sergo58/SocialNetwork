import React from "react";
import s from "./Friends.module.css"
import {DialogsDataType, NamesType} from "../../Redux/State";

type FriendsPropsType = {
    friendsName:Array<NamesType>
}

export function Friends(props: FriendsPropsType) {

    return <div className={s.friends}>
        <div>Friends</div>

            <div className={s.friend1}>
                <div>{props.friendsName[0].name}</div>

            <img
                src={"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"}/>
        </div>

             <div className={s.friend2}>
                <div>{props.friendsName[1].name}</div>

            <img
                src={"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"}/>
        </div>
         <div className={s.friend2}>
                <div>{props.friendsName[2].name}</div>

            <img
                src={"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"}/>
        </div>
        </div>






}