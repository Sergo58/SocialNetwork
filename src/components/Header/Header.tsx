import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {StoreType} from "../../Redux/reduxStore";
import {authPageType} from "../../Redux/authReducer";
type HeaderType = {
    login: string | null
    isAuth: boolean
}
export function Header (props:HeaderType)  {
    return <header className={s.header}>
        <img
            src={"https://banner2.cleanpng.com/20180405/vvq/kisspng-sport-trinity-academy-team-game-rugby-medival-knight-5ac5f0b3c33920.0510478815229216517996.jpg"}/>
    <div className={s.loginBlock}>
        {props.isAuth?props.login:
        <NavLink to={"/login"} >
Login
        </NavLink>}
    </div>
    </header>
}