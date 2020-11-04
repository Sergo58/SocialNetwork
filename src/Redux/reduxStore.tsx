import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sideBarReducer} from "./SideBarReducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./authReducer";


let reducers=combineReducers({
        ProfilePage:profileReducer,
        DialogsPage:dialogsReducer,
        SideBar:sideBarReducer,
         UserPage:usersReducer,
    auth:authReducer
}
    )
type RootReducers=typeof reducers
export type StoreType=ReturnType<RootReducers>
export let store=createStore(reducers);

