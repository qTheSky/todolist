import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg"/>
        </div>
        <div>
            ava + descriptoion
        </div>
        <div>
            my posts
            <div>
                new post
            </div>
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                post1
            </div>
            <div className={s.item}>
                post2
            </div>
        </div>
    </div>
}
export default Profile;