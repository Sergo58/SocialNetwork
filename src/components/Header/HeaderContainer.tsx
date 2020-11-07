import React from "react";

import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {getAuthUserData, setUserDataAC} from "../../Redux/authReducer";
import {authAPI} from "../../api/api";


type MapStateType = {
    login: string | null
    isAuth: boolean


}
type MapDispatchType = {
    getAuthUserData:(id: number, email: string, login: string)=>void
}
type PropsType = MapStateType & MapDispatchType
class HeaderContainer extends React.Component<PropsType>   {
    componentDidMount() {

        authAPI.me().then(response => {
if (response.data.resultCode===0){
    let {id, email, login} = response.data.data
    this.props.getAuthUserData(id, email, login);
}
        })
    }

    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}

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
    getAuthUserData
})(HeaderContainer);