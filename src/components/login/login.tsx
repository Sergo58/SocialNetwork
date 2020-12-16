import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type formDataType={
    login:string,
    password:string,
    rememberme:boolean
}

const  LoginForm:React.FC<InjectedFormProps<formDataType>> =(props)=>{
    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field component={"input"} name={"login"}  placeholder={"Login"}/>
                </div>
                <div>
                    <Field component={"input"} name={"password"} placeholder={"Password"}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberme"} type={"checkbox"}/> remember me
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
export function Login (){
    const onSubmit=(formData:formDataType)=>{
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
           </div>
}