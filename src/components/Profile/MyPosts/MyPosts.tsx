import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post"

import {ActionTypes,  PostDataType} from "../../../Redux/Store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControl";



type MyPostsPropsType = {
    post: Array<PostDataType>
    newPostText: string
    addPost:(values:string)=>void


}

export function MyPosts(props: MyPostsPropsType) {


    let postsElements = props.post.map(p => <Post message={p.message} likeCount={p.likesCount}/>)


    let addPost = function (values:any) {
        props.addPost(values.newPostText)

    }



    return (<div className={s.postsBlock}>
        <h3>My post</h3>
            <AddNewPostReduxForm onSubmit={addPost}/>
        <div>
            New post
        </div>
        <div className={s.posts}>
            {postsElements}


        </div>
    </div>

    )}

const maxLength10=maxLengthCreator(10)
const AddNewPostForm:React.FC<InjectedFormProps<MyPostsPropsType>> =(props)=>{
return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" placeholder={"post message"} component={Textarea} validate={[required,maxLength10]}/>
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>


}

export const AddNewPostReduxForm = reduxForm<MyPostsPropsType>(
    {form:'ProfileAddNewPostForm'}
)(AddNewPostForm)