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

import {RootStateType, state, updateNewPostText} from "./Redux/State";
import {addPost} from "./Redux/State";

type AppPropsType={
    appState:RootStateType
}

function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={props.appState.SideBar}/>
                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}  render={()=><Dialogs state={props.appState.DialogsPage}/>}/>
                    <Route path={"/profile"} render={()=><Profile  state={props.appState.ProfilePage } addPost={addPost} newPostText={state.ProfilePage.newPostText} updateNewPostText={updateNewPostText}/>} />
                    <Route path={"/news"} render={()=><News/>} />
                    <Route path={"/settings"} render={()=><Settings/>} />
                    <Route path={"/music"} render={()=><Music/>}/>

                </div>


            </div>

        </BrowserRouter>)

}

export default App;
