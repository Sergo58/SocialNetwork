import React, {Dispatch} from "react"
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {ActionTypes} from "../../Redux/Store";
import {compose} from 'redux';
import preloader from "../../ets/images/Infinity-1.7s-200px (2).svg"
import {
    follow, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unFollow,

    UsersType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSelector
} from "../../Redux/users-selector";

export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,

    setCurrentPage: (currentPage: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number

    isFetching:boolean

    toggleIsFollowingProgress:(isFetching:boolean,userId:number)=>void
    followingInProgress:Array<number>
    getUsers:(currentPage:number,pageSize:number)=>void
}


export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);



    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
     this.props.getUsers(pageNumber,this.props.pageSize)
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

                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

/*let mapStateToProps=(state:StoreType)=>{
    return{
        users: state.UserPage.users,
        pageSize: state.UserPage.pageSize,
        totalUsersCount: state.UserPage.totalUsersCount,
        currentPage: state.UserPage.currentPage,
        isFetching: state.UserPage.isFetching,
        followingInProgress:state.UserPage.followingInProgress



    }
}*/
let mapStateToProps=(state:StoreType)=>{
    return{
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)



    }
}


export default compose<any>(
    WithAuthRedirect,
    connect(mapStateToProps, {follow, unFollow, setCurrentPage,toggleIsFollowingProgress, getUsers})
)(UsersContainer)