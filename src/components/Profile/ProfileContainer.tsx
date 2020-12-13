import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {getUserProfile, ProfilePropsType} from "../../Redux/ProfileReducer";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {usersAPI} from "../../api/api";
import {compose} from 'redux';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateType = {
    profile: ProfilePropsType | null

}
type MapDispatchType = {
    getUserProfile: (userId: number) => void
}
type PathParamsType = {
    userId: any
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
    }

    render() {

        return (
            <div><Profile profile={this.props.profile} />


            </div>)
    }
}

const mapStateToProps = (state: StoreType): MapStateType => {
    return {
        profile: state.ProfilePage.profile,

};}

    export default compose<any>(
        /*WithAuthRedirect,*/
        withRouter,
        connect(mapStateToProps, {getUserProfile}),
    )(ProfileContainer)