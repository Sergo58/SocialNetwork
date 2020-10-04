import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType, ProfilePageType, RootStateType} from "../../Redux/Store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {store, StoreType} from "../../Redux/reduxStore";

export type ProfilePropsType={
store:StoreType
    state:ProfilePageType
    dispatch:(action:ActionTypes)=>void
    newPostText:string

}

export function Profile (props:ProfilePropsType)  {
    return     (
        <div> <ProfileInfo/>
            <MyPostsContainer  store={props.store}
                              post={props.state.postData}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
                     />

            </div>)}
