import {ActionTypes, PostDataType, ProfilePageType, RootStateType,} from "./Store";
import {Dispatch} from "react";
import {usersAPI} from "../api/api";
export type UsersPageType= {
    users:Array<UsersType>
    pageSize:number,
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:Array<number>
}


export type UsersType={
    id:number,
    photos: { small:string
        large:string
    }
    followed:boolean,
    name:string,
    status:string,
    /* location:{
         city:string
         country:string
     }*/

}


let initial:UsersPageType={
    users:  [


    ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true,
    followingInProgress:[]

}

export const usersReducer=(state:UsersPageType=initial,action:ActionTypes)=>{
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:false}
                    }
                    return u;
                })
            }
        case "SET USERS":{
            return {...state,users:action.users}
        }
        case "SET CURRENT PAGE":{
            return {...state,currentPage:action.currentPage}
        }
        case "SET TOTAL USERS COUNT":
            return {...state,totalUsersCount:action.totalUsersCount}
        case "TOGGLE IS FETCHING":
            return {...state,isFetching:action.isFetching}
        case "TOGGLE IS FOLLOWING PROGRESS":
            return {...state,followingInProgress:action.isFetching?[...state.followingInProgress,action.userId]:
                    state.followingInProgress.filter(id=>id!=action.userId)}
        default:
            return state
    }




}

export const followSuccess=(userId:number)=>{
    return {
        type:"FOLLOW",
        userId
    } as const
}
export const unFollowSuccess=(userId:number)=>{
    return {
        type:"UNFOLLOW",
        userId
    } as const
}
export const setUsers=(users:Array<UsersType>)=>{
    return {
        type:"SET USERS",
        users
    } as const
}
export const setCurrentPage=(currentPage:number)=>{
    return {
        type:"SET CURRENT PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount=(totalUsersCount:number)=> {
    return {
        type: "SET TOTAL USERS COUNT",
        totalUsersCount
    } as const
}
export const toggleIsFetching=(isFetching:boolean)=>{
    return {
        type:"TOGGLE IS FETCHING",
        isFetching
    } as const


}

export const toggleIsFollowingProgress=(isFetching:boolean,userId:number)=>{
    return {
        type:"TOGGLE IS FOLLOWING PROGRESS",
        isFetching,userId
    } as const


}

export const getUsers=(currentPage:number,pageSize:number)=>{
    return (dispatch:Dispatch<ActionTypes>)=>{
        dispatch(toggleIsFetching(true))


        usersAPI.getUsers(currentPage,pageSize).
        then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow=(userId:number) => {
    return (dispatch:Dispatch<ActionTypes>)=>{
        dispatch(toggleIsFollowingProgress(true,userId));
        usersAPI.follow(userId)

            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false,userId))
            });
    }
}
export const unFollow=(userId:number) => {
    return (dispatch:Dispatch<ActionTypes>)=>{
        dispatch(toggleIsFollowingProgress(true,userId));
        usersAPI.unfollow(userId)

            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false,userId))
            });
    }
}


