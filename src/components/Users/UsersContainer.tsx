import React, {Dispatch} from "react"
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {ActionTypes} from "../../Redux/Store";
import preloader from "../../ets/images/Infinity-1.7s-200px (2).svg"
import {
    follow,
    setCurrentPage,
     setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,

    UsersType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

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
}


export class UsersContain extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true,
        }).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true,
        }).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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
        isFetching: state.UserPage.isFetching


    }
}


export const UsersContainer=connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContain)

