import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"

import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionTypes,

    DialogsDataType,
    DialogsPageType,
    MessageDataType,

} from "../../Redux/Store";

import {Redirect} from "react-router";
import {Field, InjectedFormProps, reduxForm, SubmitHandler} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";


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
    addMessage:(newMessageBody:string)=>void
    isAuth:boolean

}




export function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} key={d.id}  id={d.id} avatar={d.avatar}/>);

    let messagesElements = props.state.messages.map((m) => <Message key={m.id} message={m.message}/>)


    let addNewMessageClick=function (values:any) {
        props.addMessage(values.newMessageBody)

    }
if(!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

<AddMessageReduxForm onSubmit={addNewMessageClick}/>
        </div>


    )

}
const maxLength100=maxLengthCreator(100)
const AddMessageForm:React.FC<InjectedFormProps<DialogsPropsType>> =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,maxLength100]} name='newMessageBody' placeholder='Enter your message'  ></Field>
            </div>
            <div>
                <button >Send</button>
            </div>
        </form>

    )
}

export const AddMessageReduxForm = reduxForm<DialogsPropsType>(
    {form:'dialogAddMessageForm'}
)(AddMessageForm)
