import React, {ChangeEvent, Dispatch} from "react";

import {ActionTypes, PostDataType, ProfilePageType} from "../../../Redux/Store";
import {addPostAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {store, StoreType} from "../../../Redux/reduxStore";

import {connect} from "react-redux";


type MyPostsPropsContainerType = {}


const mapStateToProps=(state:StoreType)=>{

    return{
        post:state.ProfilePage.postData,
        newPostText:state.ProfilePage.newPostText,

    }
}
const mapDispatchToProps=(dispatch:Dispatch<ActionTypes>)=>{
    return{

        addPost:(newPostText:string)=>{
            dispatch(addPostAC(newPostText))
        }
    }
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)