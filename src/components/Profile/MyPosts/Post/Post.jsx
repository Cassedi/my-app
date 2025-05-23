import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCBQAq4fDkjizcfZGBW_6ir3gL4Kd8b_3fA&s"></img>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
 
}

export default Post;