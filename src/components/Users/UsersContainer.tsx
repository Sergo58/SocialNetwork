import React, {Dispatch} from "react"
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {ActionTypes} from "../../Redux/Store";
import preloader from "../../ets/images/Infinity-1.7s-200px (2).svg"
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unFollow,

    UsersType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching:boolean
    toggleIsFetching:(isFetching:boolean)=>void
    toggleIsFollowingProgress:(isFetching:boolean,userId:number)=>void
    followingInProgress:Array<number>
}


export class UsersContain extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)


        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).
        then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true)

       usersAPI.getUsers(currentPage,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {


        return <>
            {this.props.isFetching? <Preloader />:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps=(state:StoreType)=>{
    return{
        users: state.UserPage.users,
        pageSize: state.UserPage.pageSize,
        totalUsersCount: state.UserPage.totalUsersCount,
        currentPage: state.UserPage.currentPage,
        isFetching: state.UserPage.isFetching,
        followingInProgress:state.UserPage.followingInProgress



    }
}


export const UsersContainer=connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress
})(UsersContain)