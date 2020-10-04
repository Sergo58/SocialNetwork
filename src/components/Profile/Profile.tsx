import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType, ProfilePageType, RootStateType} from "../../Redux/Store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {store, StoreType} from "../../Redux/reduxStore";

export type ProfilePropsType={



}

export function Profile (props:ProfilePropsType)  {
    return     (
        <div> <ProfileInfo/>
            <MyPostsContainer/>

            </div>)}
