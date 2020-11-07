import {ActionTypes, PostDataType, ProfilePageType, RootStateType,} from "./Store";
import {Dispatch} from "react";
import {usersAPI} from "../api/api";

export type ProfilePropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        website: string
    }
    photos: {
        small: string
        large: string
    }
}

let initialState={ newPostText:"",
    postData:  [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 7},
        {id: 3, message: "EEEEEHHHHHAAAAA", likesCount: 4},
        {id: 4, message: "Game Over", likesCount: 77},
        {id: 5, message: "I'd die for you", likesCount: 756},
    ] as Array<PostDataType>,
    profile: null as null | ProfilePropsType

}
type InitialStateType = typeof initialState
export const profileReducer=(state=initialState,action:ActionTypes):InitialStateType=>{
       switch (action.type) {
           case "ADD-POST":{ const newPost:PostDataType={
               id:new Date().getTime(),
               message:state.newPostText,
               likesCount:0
           };
               return {
                   ...state,
                   postData:[...state.postData,newPost],
                   newPostText:""
               }

               }

           case "CHANGE NEW TEXT":{

               return {
                   ...state,
                   newPostText:action.newText
               }
           }
           case "SET USER PROFILE":
               return {...state,profile:action.profile}

           default:
               return state
       }




    }

export const addPostAC=()=>{
    return {
        type:"ADD-POST"
    } as const
}
export const changeNewTextAC=(newText:string)=>{
    return {
        type:"CHANGE NEW TEXT",
        newText:newText
    } as const
}
export const setUserProfileAC=(profile:ProfilePropsType)=>{
    return {
        type:"SET USER PROFILE",
        profile:profile
    } as const
}
export const getUserProfile=(userId:number)=> {
    return (dispatch: Dispatch<ActionTypes>) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data));
        })
    }
}

