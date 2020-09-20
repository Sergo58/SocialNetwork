import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsDataType, DialogsPageType, MessageDataType} from "../../Redux/State";


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
}




export function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name}  id={d.id} avatar={d.avatar}/>);

    let messagesElements = props.state.messages.map((m) => <Message message={m.message}/>)

    let newMessageElement=React.createRef<HTMLTextAreaElement>()

    let addMessage=function () {

        alert(newMessageElement.current?.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>


        </div>


    )

}