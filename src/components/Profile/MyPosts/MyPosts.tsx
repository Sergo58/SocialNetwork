import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post"
import {ProfilePropsType} from "../Profile";
import {PostDataType} from "./../../../Redux/State";


type MyPostsPropsType = {
    post: Array<PostDataType>
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {


    let postsElements = props.post.map(p => <Post message={p.message} likeCount={p.likesCount}/>)


    let addPost = function () {
        props.addPost(props.newPostText)

    }

    let newUpdateNewPostText = function (e: ChangeEvent<HTMLTextAreaElement>) {
        props.updateNewPostText(e.currentTarget.value)


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