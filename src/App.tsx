import React from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";

import {BrowserRouter, Route} from "react-router-dom"
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";

import {ActionTypes,} from "./Redux/Store";
import {store, StoreType} from "./Redux/reduxStore";



import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/login/login";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "./Redux/authReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";



type MapStateType = {
    initialized:boolean


}



type MapDispatchType = {
    initializeApp:()=>void

}
type PropsType = MapStateType & MapDispatchType


class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(this.props.initialized){
            return <Preloader/>
        }
        const state = store.getState()


        return (

            <BrowserRouter>
                <div className={"app-wrapper"}>
                    <HeaderContainer/>
                    <Navbar state={state.SideBar}/>
                    <div className="app-wrapper-content">
                        <Route exact path={"/dialogs"} render={() => <DialogsContainer/>}/>
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>

                    </div>


                </div>

            </BrowserRouter>)

    }
}

const mapStateToProps = (state: StoreType): MapStateType => {
    return {
        initialized:state.app.initialized
    }
}

export default compose(connect<MapStateType, MapDispatchType, {}, StoreType>(mapStateToProps, {
    initializeApp
})) (App)