import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post"
import {ProfilePropsType} from "../Profile";
import {ActionTypes,  PostDataType} from "../../../Redux/Store";
import {addPostAC, changeNewTextAC} from "../../../Redux/ProfileReducer";


type MyPostsPropsType = {
    post: Array<PostDataType>

    newPostText: string
    addPost:()=>void
    updateNewPostText:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}

export function MyPosts(props: MyPostsPropsType) {


    let postsElements = props.post.map(p => <Post message={p.message} likeCount={p.likesCount}/>)


    let addPost = function () {
        props.addPost()

    }

    let newUpdateNewPostText = function (e: ChangeEvent<HTMLTextAreaElement>) {
        props.updateNewPostText(e)


    }

    return (<div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.newPostText} onChange={newUpdateNewPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>
        <div>
            New post
        </div>
        <div className={s.posts}>
            {postsElements}


        </div>
    </div>

    )}