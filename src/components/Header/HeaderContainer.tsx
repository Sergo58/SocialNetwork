import React from "react";

import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import { logOut} from "../../Redux/authReducer";
import {authAPI} from "../../api/api";


type MapStateType = {
    login: string | null
    isAuth: boolean


}
type MapDispatchType = {

    logOut:()=>void
}
type PropsType = MapStateType & MapDispatchType
class HeaderContainer extends React.Component<PropsType>   {


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
    logOut
})(HeaderContainer);