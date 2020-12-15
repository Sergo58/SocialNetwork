import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {getUserProfile, getUserStatus, ProfilePropsType, updateUserStatus} from "../../Redux/ProfileReducer";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {usersAPI} from "../../api/api";
import {compose} from 'redux';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileStatusType} from "./ProfileInfo/ProfileStatus";


type MapStateType = {
    profile: ProfilePropsType | null
    status: string

}
type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus:(status:string)=>void
}
type PathParamsType = {
    userId: any
    status:string
}
type OwnPropsType = MapDispatchType & MapStateType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)

    }

    render() {

        return (
            <div><Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />


            </div>)
    }
}

const mapStateToProps = (state: StoreType): MapStateType => {
    return {
        profile: state.ProfilePage.profile,
        status:state.ProfilePage.status

};}

    export default compose<any>(
        /*WithAuthRedirect,*/
        withRouter,
        connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    )(ProfileContainer)