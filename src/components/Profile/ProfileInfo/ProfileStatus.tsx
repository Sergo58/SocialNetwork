import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"
import {setUserStatusAC} from "../../../Redux/ProfileReducer";


export type ProfileStatusType = {
    status: string
    updateUserStatus:(status:string)=>void
}

type stateType={
    editMode: boolean,
    status:string
}
export class ProfileStatus extends React.Component<ProfileStatusType, any> {

    state:stateType = {
        editMode: false,
        status:this.props.status
    }

activateEditMode=()=>{
        this.setState({
            editMode:true
        })
   }
    deActivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    this.props.updateUserStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
this.setState({status:e.currentTarget.value})

    }
    componentDidUpdate(prevProps:ProfileStatusType,prevState:stateType){
if (prevProps.status!==this.props.status){
    this.setState({status:this.props.status})
}

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status||'No status'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}   autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}></input>
                </div>
                }

            </div>


        )
    }
}