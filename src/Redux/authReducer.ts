import {Dispatch} from "react";
import {authAPI} from "../api/api";
import {isBoolean} from "util";

export type authPageType= {
    userid: number|null,
    email: string|null,
    login: string|null
    isAuth:boolean
}





let initial:authPageType={
   userid:null,
    email:null,
    login:null,
    isAuth:false


}

export const authReducer=(state:authPageType=initial,action:ActionTypes)=>{
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,


                }


        default:
            return state
    }




}

export const setUserDataAC=(id: number|null, email: string|null, login: string|null, isAuth:boolean)=>{
    return {
        type:"SET-USER-DATA",
        payload: {
            id, email, login,isAuth
        }
    } as const
}

export const getAuthUserData=()=>{
return (dispatch: Dispatch<ActionTypes>)=>{
    authAPI.me().then(response => {
        if (response.data.resultCode===0){
            let {id, email, login} = response.data.data
            dispatch(setUserDataAC(id, email, login,true));
        }
    })
}
}

export const login=(email:string,password:string,rememberMe:boolean)=>{
    return (dispatch: Dispatch<any>)=>{
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode===0){
                dispatch(getAuthUserData());
            }
        })
    }
}

export const logOut=()=>{
    return (dispatch: Dispatch<setUserDataActionType>)=>{
        authAPI.loginOut().then(response => {
            if (response.data.resultCode===0){
                dispatch(setUserDataAC(null,null,null,false));
            }
        })
    }
}


  type ActionTypes=setUserDataActionType
type setUserDataActionType=ReturnType<typeof setUserDataAC>