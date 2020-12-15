import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"


export type ProfileStatusType = {
    status: string
    updateUserStatus:(status:string)=>void
}


export class ProfileStatus extends React.Component<ProfileStatusType, any> {

    state = {
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