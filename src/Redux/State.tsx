import {link} from "fs";

let renderTree=()=>{
    console.log("state was changed")
}


export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

 export type DialogsDataType = {
    id: number
    name: string
    avatar:string
}
 export type MessageDataType = {
    id: number
    message: string
}

export type RootStateType={
    ProfilePage:ProfilePageType
    DialogsPage:DialogsPageType
    SideBar:SideBarType
}
export type ProfilePageType={
    postData:Array<PostDataType>
    newPostText:string

}
export type SideBarType={
    names:Array<NamesType>
}
export type DialogsPageType={
    messages:Array<MessageDataType>
    dialogs:Array<DialogsDataType>

}
export type NamesType={
    id:number
    name:string
}







export type StoreType={
    _state:RootStateType
    _renderTree:()=>void
    subscribe:(callback:()=>void)=>void
    getState:()=>RootStateType
    dispatch:(action:AddPostActionType|ChangeNewTextActionType)=>void
}
 type AddPostActionType=ReturnType<typeof addPostAC>
 type ChangeNewTextActionType=ReturnType<typeof changeNewTextAC>
export  type ActionTypes=AddPostActionType|ChangeNewTextActionType

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
export const store:StoreType={
    _state:{
        ProfilePage:{
            newPostText:"",
            postData:  [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 7},
                {id: 3, message: "EEEEEHHHHHAAAAA", likesCount: 4},
                {id: 4, message: "Game Over", likesCount: 77},
                {id: 5, message: "I'd die for you", likesCount: 756},
            ]
        },

        DialogsPage:{
            dialogs:  [
                {id: 1, name: "Sergo", avatar:"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"},
                {id: 2, name: "Pedro", avatar:"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"},
                {id: 3, name: "Vito", avatar:"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"},
                {id: 4, name: "Mikele", avatar:"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"},
                {id: 5, name: "Fredo", avatar:"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"},
                {id: 6, name: "Santino", avatar:"https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"}

            ],
            messages:[
                {id: 1, message: "hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "YAAAAAAAAAAAAAAA!!"},
                {id: 4, message: "We are the champions!!!"},
                {id: 5, message: "OOOOOOHHHHHHHHHHH!!!"},
                {id: 6, message: "Sergo, you are cool!"},


            ]



        },
        SideBar:{


            names:[
                {id: 1, name: "Sergo"},
                {id: 2, name: "Pedro"},
                {id: 3, name: "Vito"},
                {id: 4, name: "Mikele"},
                {id: 5, name: "Fredo"},
                {id: 6, name: "Santino"}
            ]}

    },

    _renderTree(){
        console.log("state was changed")
    },
    dispatch(action){
        if(action.type==="ADD-POST"){
            const newPost:PostDataType={
                id:new Date().getTime(),
                message:action.postMessage,
                likesCount:0
            };
            this._state.ProfilePage.postData.push(newPost)
            this._state.ProfilePage.newPostText=""
            this._renderTree()
        }
        else if(action.type==="CHANGE NEW TEXT"){
            this._state.ProfilePage.newPostText=action.newText;

            this._renderTree()
        }
    },

    subscribe(callback){
        this._renderTree=callback;
    },
    getState(){
        return this._state}

}