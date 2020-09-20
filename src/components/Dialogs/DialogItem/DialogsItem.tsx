import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
    avatar:string
}

export function DialogItem(props: DialogItemPropsType) {
    let path = "/dialogsItem/" + props.id
    return (

        <div className={s.dialog + ' ' + s.active}>
            <img src={props.avatar} alt="" className={s.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
