import {ActionTypes, PostDataType, ProfilePageType, RootStateType,} from "./Store";

let initial={ newPostText:"",
    postData:  [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 7},
        {id: 3, message: "EEEEEHHHHHAAAAA", likesCount: 4},
        {id: 4, message: "Game Over", likesCount: 77},
        {id: 5, message: "I'd die for you", likesCount: 756},
    ]}

export const profileReducer=(state:ProfilePageType=initial,action:ActionTypes)=>{
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
