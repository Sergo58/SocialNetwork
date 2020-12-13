import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfilePropsType} from "../../../Redux/ProfileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoType = {
    profile: ProfilePropsType | null
}

 export function ProfileInfo(props: ProfileInfoType) {
    if(!props.profile){
        return <Preloader/>
    }
    return (<div >
           {/* <div>
                <img src="https://sun1-22.userapi.com/7IowIVrx-i0lzcwIiMbsBavXYfnl-7Tzw_nnig/24o24nNgf0I.jpg" alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large} alt=""/><br/>

                {props.profile.fullName}
                <ProfileStatus status={"test"} />
            </div>
        </div>

    )
}