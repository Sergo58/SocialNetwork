import {ActionTypes, PostDataType, ProfilePageType, RootStateType, store} from "./State";



export const profileReducer=(state:ProfilePageType,action:ActionTypes)=>{
       switch (action.type) {
           case "ADD-POST":
               const newPost:PostDataType={
                   id:new Date().getTime(),
                   message:action.postMessage,
                   likesCount:0
               };
               state.postData.push(newPost)
               state.newPostText="";
               return state
           case "CHANGE NEW TEXT":
               state.newPostText=action.newText;
               return state
           default:
               return state
       }




    }

export const addPostAC=(postMessage:string)=>{
    return {
        type:"ADD-POST",
        postMessage:postMessage
    } as const
}
export const changeNewTextAC=(newText:string)=>{
    return {
        type:"CHANGE NEW TEXT",
        newText:newText
    } as const
}
