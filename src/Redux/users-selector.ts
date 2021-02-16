import {StoreType} from "./reduxStore";
import {createSelector} from "reselect";

export const getUsersSelector=(state:StoreType)=>{
    return state.UserPage.users
}


// @ts-ignore
export const getUsersReselect=createSelector(getUsersSelector,
    (users:[])=>{
        return users.filter(u=>true)
    }
)

export const getPageSize=(state:StoreType)=>{
    return state.UserPage.pageSize
}
export const getTotalUsersCount=(state:StoreType)=>{
    return state.UserPage.totalUsersCount
}

export const getCurrentPage=(state:StoreType)=>{
    return state.UserPage.currentPage
}
export const getIsFetching=(state:StoreType)=>{
    return state.UserPage.isFetching
}

export const getFollowingInProgress=(state:StoreType)=>{
    return state.UserPage.followingInProgress
}