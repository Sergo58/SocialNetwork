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

import {Login} from "./components/login/login";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";






type PropsType={

}

const App:React.FC<PropsType> = (props)=> {
    const state=store.getState()
    return (

        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderContainer />
                <Navbar state={state.SideBar}/>
                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}  render={()=><DialogsContainer  />}/>
                    <Route path={"/profile/:userId?"} render={()=><ProfileContainer/>} />
                    <Route path={"/users"} render={()=><UsersContainer          />}/>
                    <Route path={"/login"} render={()=><Login/>}/>
                    <Route path={"/news"} render={()=><News/>} />
                    <Route path={"/settings"} render={()=><Settings/>} />
                    <Route path={"/music"} render={()=><Music/>}/>

                </div>


            </div>

        </BrowserRouter>)

}

export default App;
