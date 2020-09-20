import React from "react";
import s from "./ProfileInfo.module.css"

 export function ProfileInfo() {
    return (<div >
            <div>
                <img src="https://sun1-22.userapi.com/7IowIVrx-i0lzcwIiMbsBavXYfnl-7Tzw_nnig/24o24nNgf0I.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}