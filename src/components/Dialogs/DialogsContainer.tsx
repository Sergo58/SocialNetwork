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
import {StoreType} from "../../Redux/reduxStore";




type DialogItemPropsType = {
    name: string
    id: number
    avatar:string
}
type MessagePropsType = {
    message: string
}

type DialogsContainerPropsType={
    state:DialogsPageType
    store:StoreType
}




export function DialogsContainer(props: DialogsContainerPropsType) {

let newMessageBody=props.state.newMessageBody
    let addMessage=function () {
props.store.dispatch(sendMessageAC())

    }
let onSendMessageClick=function (e:ChangeEvent<HTMLTextAreaElement>) {
    let body=e.currentTarget.value;
    props.store.dispatch(changeNewMessageAC(body))

    }

    return (
       <Dialogs  state={props.state}  addMessage={addMessage} onSendMessageClick={onSendMessageClick} />

    )

}