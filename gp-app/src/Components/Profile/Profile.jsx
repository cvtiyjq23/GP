import s from './Profile.module.css'
import My_Posts from "./My_Posts/My_Posts";
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = (Props) => {
    return (
        <div className={s.Profile_Wrapper}>
            <div className={s.Profile_Header}>
                <img src="https://static-cse.canva.com/blob/969480/1600w-HToPSFjwKp0.jpg"/>
            </div>
            <Profile_Info/>
            <My_Posts Profile_Page ={Props.Profile_Page} Dispatch = {Props.Dispatch} />
        </div>
    )
}
export default Profile;
