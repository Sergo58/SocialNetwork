import React, {Dispatch} from "react"
import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../Redux/reduxStore";
import {ActionTypes} from "../../Redux/Store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/users-reducer";

type UsersPropsType={}

let mapStateToProps=(state:StoreType)=>{
    return{
        users: state.UserPage.users
    }
}
let mapDispatchToProps=(dispatch:Dispatch<ActionTypes>)=>{
    return{
follow:(userId:number)=>{
    dispatch(followAC(userId))
},
        unFollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:Array<UsersType>)=>{
            dispatch(setUsersAC(users))
        },
    }
}

export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)

