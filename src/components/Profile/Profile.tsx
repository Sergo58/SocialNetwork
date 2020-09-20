import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType, ProfilePageType, RootStateType} from "../../Redux/State";

export type ProfilePropsType={
    state:ProfilePageType
    addPost:(postMessage:string)=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

export function Profile (props:ProfilePropsType)  {
    return     (
        <div> <ProfileInfo/>
            <MyPosts post={props.state.postData}
                     newPostText={props.state.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>

            </div>)}
