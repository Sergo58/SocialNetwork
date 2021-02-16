import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sideBarReducer} from "./SideBarReducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./authReducer";
import {applyMiddleware} from  "redux";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./appReducer";

let reducers=combineReducers({
        ProfilePage:profileReducer,
        DialogsPage:dialogsReducer,
        SideBar:sideBarReducer,
         UserPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
}
    )
type RootReducers=typeof reducers
export type StoreType=ReturnType<RootReducers>
export let store=createStore(reducers,applyMiddleware(thunkMiddleware));

