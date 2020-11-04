import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {ProfilePropsType, setUserProfileAC} from "../../Redux/ProfileReducer";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router";

type MapStateType = {
    profile: ProfilePropsType | null
}
type MapDispatchType = {
    setUserProfile: (profile: ProfilePropsType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div><Profile profile={this.props.profile}/>


            </div>)
    }
}

const mapStateToProps = (state: StoreType): MapStateType => {
    return {
        profile: state.ProfilePage.profile
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStateType, MapDispatchType, {}, StoreType>(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(WithUrlDataContainerComponent);