import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img
                src='https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg'></img>
            <div className={s.descriptionBlock}>
                ava+desc
            </div>
        </div>
    );

}
export default ProfileInfo;