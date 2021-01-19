import React from "react";

import {Profile} from "./Profile";
import {getUserProfile, getUserStatus, ProfilePropsType, updateUserStatus} from "../../Redux/ProfileReducer";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router";

import {compose} from 'redux';


type MapStateType = {
    profile: ProfilePropsType | null
    status: string
    authorizedUserId: any
    isAuth: boolean
}

type MapDispatchType = {
    getUserStatus:(userId: number) => void
    getUserProfile: (userId: number) => void

    updateUserStatus: (status: string) => void
}
type PathParamsType = {
    userId: any

}
type OwnPropsType = MapDispatchType & MapStateType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)

    }

    render() {

        return (
            <div><Profile {...this.props}
                          profile={this.props.profile}
                          status={this.props.status}
                          updateUserStatus={this.props.updateUserStatus} />


            </div>)
    }
}

const mapStateToProps = (state:StoreType): MapStateType => {
    return {
        profile: state.ProfilePage.profile,
        status:state.ProfilePage.status,
        authorizedUserId:state.auth.userId,
        isAuth:state.auth.isAuth


};}

    export default compose<React.ComponentType>(
        /*WithAuthRedirect,*/
        withRouter,
        connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    )(ProfileContainer)