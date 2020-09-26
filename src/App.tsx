import React from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";

import {ActionTypes, StoreType,} from "./Redux/State";


type PropsType={
    store:StoreType
    dispatch:(action:ActionTypes)=>void
}

const App:React.FC<PropsType> = (props)=> {
    const state=props.store.getState()
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={state.SideBar}/>
                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}  render={()=><Dialogs dispatch={props.dispatch} state={state.DialogsPage}/>}/>
                    <Route path={"/profile"} render={()=><Profile  state={props.store._state.ProfilePage } dispatch={props.dispatch} newPostText={state.ProfilePage.newPostText} />} />
                    <Route path={"/news"} render={()=><News/>} />
                    <Route path={"/settings"} render={()=><Settings/>} />
                    <Route path={"/music"} render={()=><Music/>}/>

                </div>


            </div>

        </BrowserRouter>)

}

export default App;
