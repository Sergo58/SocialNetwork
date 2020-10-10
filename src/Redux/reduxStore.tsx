import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sideBarReducer} from "./SideBarReducer";


let reducers=combineReducers({
        ProfilePage:profileReducer,
        DialogsPage:dialogsReducer,
        SideBar:sideBarReducer}
    )
type RootReducers=typeof reducers
export type StoreType=ReturnType<RootReducers>
export let store=createStore(reducers);

