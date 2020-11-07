import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "../../Redux/ProfileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    profile: ProfilePropsType | null

}



export function Profile (props:ProfileType)  {
    return     (
        <div> <ProfileInfo profile={props.profile} />
            <MyPostsContainer />

            </div>)}
