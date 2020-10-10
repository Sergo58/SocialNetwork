import {ActionTypes, DialogsPageType, RootStateType} from "./Store";

let initial = {
    dialogs: [
        {
            id: 1,
            name: "Sergo",
            avatar: "https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"
        },
        {
            id: 2,
            name: "Pedro",
            avatar: "https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"
        },
        {
            id: 3,
            name: "Vito",
            avatar: "https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"
        },
        {
            id: 4,
            name: "Mikele",
            avatar: "https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"
        },
        {
            id: 5,
            name: "Fredo",
            avatar: "https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"
        },
        {
            id: 6,
            name: "Santino",
            avatar: "https://avatars.mds.yandex.net/get-pdb/1649566/54263c63-814a-40c4-bec0-14fd28ff1733/s1200?webp=false"
        }

    ],

    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "YAAAAAAAAAAAAAAA!!"},
        {id: 4, message: "We are the champions!!!"},
        {id: 5, message: "OOOOOOHHHHHHHHHHH!!!"},
        {id: 6, message: "Sergo, you are cool!"},


    ],
    newMessageBody: ""

}


export const dialogsReducer = (state: DialogsPageType = initial, action: ActionTypes) => {
    let stateCopy

    switch (action.type) {
        case "CHANGE NEW MESSAGEBODY":


            return  stateCopy = {
                ...state,
                newMessageBody: action.newMessageBody
            }

        case "SEND MESSAGE":
            let body = state.newMessageBody
            return stateCopy = {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: new Date().getTime(), message: body}]

            }
        default:
            return state
    }


}

export const changeNewMessageAC = (newMessageBody: string) => {
    return {
        type: "CHANGE NEW MESSAGEBODY",
        newMessageBody: newMessageBody
    } as const
}
export const sendMessageAC = () => {
    return {
        type: "SEND MESSAGE",

    } as const
}