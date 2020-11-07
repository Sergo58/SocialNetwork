import {Dispatch} from "react";
import {authAPI} from "../api/api";

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
                ...action.data,
                 isAuth:true
                }


        default:
            return state
    }




}

export const setUserDataAC=(id: number, email: string, login: string)=>{
    return {
        type:"SET-USER-DATA",
        data: {
            id, email, login
        }
    } as const
}

export const getAuthUserData=()=>{
return (dispatch: Dispatch<ActionTypes>)=>{
    authAPI.me().then(response => {
        if (response.data.resultCode===0){
            let {id, email, login} = response.data.data
            dispatch(setUserDataAC(id, email, login));
        }
    })
}
}
  type ActionTypes=setUserDataActionType
type setUserDataActionType=ReturnType<typeof setUserDataAC>