import React, {ChangeEvent} from "react";

import {ActionTypes,  PostDataType} from "../../../Redux/Store";
import {addPostAC, changeNewTextAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {store, StoreType} from "../../../Redux/reduxStore";


type MyPostsPropsContainerType = {
    store:StoreType
    post: Array<PostDataType>
    dispatch:(action:ActionTypes)=>void
    newPostText: string
}

export function MyPostsContainer(props: MyPostsPropsContainerType) {




    let addPost = function () {
        props.store.dispatch(addPostAC(props.newPostText))

    }

    let newUpdateNewPostText = function (e: ChangeEvent<HTMLTextAreaElement>) {
        props.store.dispatch(changeNewTextAC(e.currentTarget.value))


    }

    return (<MyPosts newPostText={store.getState().ProfilePage.newPostText} updateNewPostText={newUpdateNewPostText} addPost={addPost} post={store.getState().ProfilePage.postData}  />

    )}