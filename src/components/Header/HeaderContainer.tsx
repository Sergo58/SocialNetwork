import React from "react";

import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {getAuthUserData, logOut} from "../../Redux/authReducer";
import {authAPI} from "../../api/api";


type MapStateType = {
    login: string | null
    isAuth: boolean


}
type MapDispatchType = {
    getAuthUserData:()=>void
    logOut:()=>void
}
type PropsType = MapStateType & MapDispatchType
class HeaderContainer extends React.Component<PropsType>   {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
            logOut={this.props.logOut}

        />
    }



}
const mapStateToProps = (state: StoreType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}



export default connect<MapStateType, MapDispatchType, {}, StoreType>(mapStateToProps, {
    getAuthUserData,logOut
})(HeaderContainer);