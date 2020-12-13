import React, {ChangeEvent, Dispatch} from "react";
import s from "./Dialogs.module.css"
import {compose} from 'redux';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionTypes,

    DialogsPageType,
    MessageDataType,

} from "../../Redux/Store";

import {changeNewMessageAC, sendMessageAC} from "../../Redux/DialogsReducer";
import {Dialogs} from "./Dialogs";

import {store, StoreType} from "../../Redux/reduxStore";

import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";




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








let mapStateToProps=(state:StoreType)=>{
    return{state: state.DialogsPage,

    }
}
let mapDispatchToProps=(dispatch:Dispatch<ActionTypes>)=>{
    return{
        addMessage:()=>{
            dispatch(sendMessageAC())
        },
        onSendMessageClick:(message:string)=>{
            dispatch(changeNewMessageAC(message))
        }
    }
}
export default compose<any>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);

