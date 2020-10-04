import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionTypes,

    DialogsDataType,
    DialogsPageType,
    MessageDataType,

} from "../../Redux/Store";
import {changeNewMessageAC, sendMessageAC} from "../../Redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {Store} from "redux";
import {store, StoreType} from "../../Redux/reduxStore";
import StoreContext from "../../storeContext";




type DialogItemPropsType = {
    name: string
    id: number
    avatar:string
}
type MessagePropsType = {
    message: string
}

type DialogsContainerPropsType={

}




export function DialogsContainer(props: DialogsContainerPropsType) {
let state=store.getState().DialogsPage
    let newMessageBody=store.getState().DialogsPage.newMessageBody
    let addMessage=function () {
        store.dispatch(sendMessageAC())

    }
    let onSendMessageClick=function (e:ChangeEvent<HTMLTextAreaElement>) {
        let body=e.currentTarget.value;
        store.dispatch(changeNewMessageAC(body))

    }

    return  (
        <StoreContext.Consumer>
            {(store)=>{return <Dialogs state={state} addMessage={addMessage}
                      onSendMessageClick={onSendMessageClick}/>}}
    </StoreContext.Consumer>
    )



}