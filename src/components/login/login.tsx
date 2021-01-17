import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";



type formDataType={
    email:string,
    password:string,
    rememberme:boolean
}

const  LoginForm:React.FC<InjectedFormProps<formDataType>> =(props)=>{
    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field component={Input} name={"email"} validate={[required]}  placeholder={"email"}/>
                </div>
                <div>
                    <Field component={Input} name={"password"} type={"password"} validate={[required]} placeholder={"Password"}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberme"} validate={[required]} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </form>
        )



}
export const LoginReduxForm = reduxForm<formDataType>(
    {form:'login'}
)(LoginForm)
 function Login (props:any){
    const onSubmit=(formData:formDataType)=>{
        props.login(formData.email,formData.password,formData.rememberme)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
           </div>
}
const mapStateToProps = (state:StoreType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);