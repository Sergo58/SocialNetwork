import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "../../Redux/ProfileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    profile: ProfilePropsType | null
    status:string
    updateUserStatus:(status:string)=>void


}



export function Profile (props:ProfileType)  {
    return     (
        <div> <ProfileInfo profile={props.profile} status={props.status}  updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer  />

            </div>)}
