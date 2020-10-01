import { ActionTypes,DialogsPageType, RootStateType} from "./State";




export const dialogsReducer=(state:DialogsPageType,action:ActionTypes)=>{

    switch (action.type){
        case "CHANGE NEW MESSAGEBODY":
            state.newMessageBody=action.newMessageBody;
            return state
        case "SEND MESSAGE":
            let body=state.newMessageBody
            state.newMessageBody=""
            state.messages.push({id:new Date().getTime(),message:body})
            return state
        default: return state
    }




}

export const changeNewMessageAC=(newMessageBody:string)=>{
    return {
        type:"CHANGE NEW MESSAGEBODY",
        newMessageBody:newMessageBody
    } as const
}
export const sendMessageAC=()=>{
    return {
        type:"SEND MESSAGE",

    } as const
}