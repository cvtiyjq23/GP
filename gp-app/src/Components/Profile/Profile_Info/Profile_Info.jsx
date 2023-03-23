import s from './Profile_Info.module.css'


const Profile_Info = () =>{
    return (
            <div className={s.Profile_Wrapper}>
                <div className={s.Profile_Avatar}>
                    <img src="https://love.ngs.ru/static/i/new/profile/female52px.png"/>
                </div>
                <div className={s.Profile_Info}>
                    <p>Имя: Олег</p>
                    <p>Возраст: 27</p>
                    <p>Пол: Женский</p>
                </div>
            </div>


    )
}
export default Profile_Info;
