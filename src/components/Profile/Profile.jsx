import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg'>
                </img>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts />
        </div>
    );

}

export default Profile;