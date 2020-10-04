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


type DialogItemPropsType = {
    name: string
    id: number
    avatar:string
}
type MessagePropsType = {
    message: string
}

type DialogsPropsType={
    state:DialogsPageType
    dispatch:(action:ActionTypes)=>void
}




export function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name}  id={d.id} avatar={d.avatar}/>);

    let messagesElements = props.state.messages.map((m) => <Message message={m.message}/>)

    let newMessageElement=React.createRef<HTMLTextAreaElement>()
let newMessageBody=props.state.newMessageBody
    let addMessage=function () {
props.dispatch(sendMessageAC())

    }
let onSendMessageClick=function (e:ChangeEvent<HTMLTextAreaElement>) {
let body=e.currentTarget.value;
    props.dispatch(changeNewMessageAC(body))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onSendMessageClick} value={newMessageBody} placeholder={"Enter your message"} ></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>


        </div>


    )

}