import React, {ChangeEvent} from "react";

import {ActionTypes, PostDataType} from "../../../Redux/Store";
import {addPostAC, changeNewTextAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {store, StoreType} from "../../../Redux/reduxStore";
import StoreContext from "../../../storeContext";


type MyPostsPropsContainerType = {}

export function MyPostsContainer(props: MyPostsPropsContainerType) {




    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state=store.getState()
                let addPost = function () {
                    store.dispatch(addPostAC(store.getState().ProfilePage.newPostText))

                }

                let newUpdateNewPostText = function (e: ChangeEvent<HTMLTextAreaElement>) {
                    store.dispatch(changeNewTextAC(e.currentTarget.value))


                }
                return <MyPosts newPostText={state.ProfilePage.newPostText}
                                updateNewPostText={newUpdateNewPostText}
                                addPost={addPost} post={state.ProfilePage.postData}/>
            }}
        </StoreContext.Consumer>
    )
}