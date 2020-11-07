import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {getUserProfile, ProfilePropsType} from "../../Redux/ProfileReducer";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {usersAPI} from "../../api/api";

type MapStateType = {
    profile: ProfilePropsType | null
    isAuth:boolean
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
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <div><Profile profile={this.props.profile} />


            </div>)
    }
}

const mapStateToProps = (state: StoreType): MapStateType => {
    return {
        profile: state.ProfilePage.profile,
        isAuth:state.auth.isAuth
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStateType, MapDispatchType, {}, StoreType>(mapStateToProps,{getUserProfile}

)(WithUrlDataContainerComponent);