import {Dispatch} from "redux";
import {authAPI} from "../api/api";

import {stopSubmit} from "redux-form";
import {getAuthUserData, setUserDataAC} from "./authReducer";


export type authPageType = typeof initial



let initial = {
    initialized:false


}

export const appReducer = (state: authPageType = initial, action: ActionTypes) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            debugger
            return {
                ...state,
                initialize:true,


            }

        default:
            return state
    }


}

export const setInitializedSuccess =()=> ({type: "SET-INITIALIZED"})




export const initializeApp = () => {

    return (dispatch: Dispatch<any>) =>{

        let promise=dispatch(getAuthUserData());
Promise.all([promise]).
then(()=>{
    dispatch(setInitializedSuccess());
})

    }




            };



type ActionTypes = setUserDataActionType
type setUserDataActionType = ReturnType<typeof setInitializedSuccess>