import {ActionTypes, PostDataType, ProfilePageType, RootStateType,} from "./Store";
import {Dispatch} from "react";
import {profileAPI, usersAPI} from "../api/api";

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
    profile: null as null | ProfilePropsType,
    status:''
}
type InitialStateType = typeof initialState
export const profileReducer=(state=initialState,action:ActionTypes):InitialStateType=>{
       switch (action.type) {
           case "ADD-POST":{ const newPost:PostDataType={
               id:new Date().getTime(),
               message:action.newPostText,
               likesCount:0
           };
               return {
                   ...state,
                   postData:[...state.postData,newPost],

               }

               }


           case "SET USER PROFILE":
               return {...state,profile:action.profile}
           case "SET USER STATUS":
               return {...state,status:action.status }

           default:
               return state
       }




    }

export const addPostAC=(newPostText:string)=>{
    return {
        type:"ADD-POST",
        newPostText
    } as const
}

export const setUserProfileAC=(profile:ProfilePropsType)=>{
    return {
        type:"SET USER PROFILE",
        profile:profile
    } as const
}
export const setUserStatusAC=(status:string)=>{
    return {
        type:"SET USER STATUS",
        status:status
    } as const
}

export const getUserProfile=(userId:number)=> {
    return (dispatch: Dispatch<ActionTypes>) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data));
        })
    }
}

export const getUserStatus=(userId:number)=> {
    return (dispatch: Dispatch<ActionTypes>) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatusAC(response.data));
        })
    }
}

export const updateUserStatus=(status:string)=> {
    return (dispatch: Dispatch<ActionTypes>) => {
        profileAPI.updateStatus(status).then(response => {
          if(response.data.resultCode===0){
              dispatch(setUserStatusAC(status));
          }
        })
    }
}
