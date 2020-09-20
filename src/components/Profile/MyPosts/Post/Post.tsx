import React from "react";
import s from "./Post.module.css"

export function Post (props:any) {

    return     <div className={s.item}>
                <img src={"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"}/>
        {props.message}
        <div><span>like{props.likeCount}</span></div>

            </div>


}