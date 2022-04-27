import React from 'react';
import s from './Post.module.css';


const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94afZQIGT9vTsfYlodOh_jsmujU4YBDCU8Q&usqp=CAU'/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )

}
export default Post;