import {Dispatch} from "redux";
import {authAPI} from "../api/api";

import {stopSubmit} from "redux-form";


export type authPageType = typeof initial



let initial = {
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    userId: null as (string | null)


}

export const authReducer = (state: authPageType = initial, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            debugger
            return {
                ...state,
                ...action.payload,


            }


        default:
            return state
    }


}

export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {

    return {
        type: "SET-USER-DATA",
        payload: {
            userId, email, login, isAuth
        }
    } as const
}

export const getAuthUserData = () => {

    return (dispatch: Dispatch) =>
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    debugger
                    let {id, email, login} = response.data.data
                    debugger
                    dispatch(setUserDataAC(id, email, login, true))

                }
            });
}
















export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {


        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message=response.data.messages.length>0?response.data.messages[0]:"Some error";
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}

export const logOut = () => {
    return (dispatch: Dispatch<setUserDataActionType>) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false));
            }
        })
    }
}


type ActionTypes = setUserDataActionType
type setUserDataActionType = ReturnType<typeof setUserDataAC>