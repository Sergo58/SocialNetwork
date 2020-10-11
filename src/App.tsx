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

import {ActionTypes,} from "./Redux/Store";
import {store, StoreType} from "./Redux/reduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";


type PropsType={

}

const App:React.FC<PropsType> = (props)=> {
    const state=store.getState()
    return (

        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={state.SideBar}/>
                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}  render={()=><DialogsContainer  />}/>
                    <Route path={"/profile"} render={()=><Profile   />} />
                    <Route path={"/users"} render={()=><UsersContainer  />}/>
                    <Route path={"/news"} render={()=><News/>} />
                    <Route path={"/settings"} render={()=><Settings/>} />
                    <Route path={"/music"} render={()=><Music/>}/>

                </div>


            </div>

        </BrowserRouter>)

}

export default App;
