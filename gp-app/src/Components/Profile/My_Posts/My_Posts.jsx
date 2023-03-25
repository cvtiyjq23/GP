import s from './My_Posts.module.css'
import Post from "./Post/Post";
import React from "react";

const My_Posts = (Props) => {

    console.log(Props.Profile_Page)
    let Posts_Elements = Props.Profile_Page.Posts.map(
        d => <Post Post_Text={d.Post} Post_Img={d.Img_link}/>);
    let New_Post_Element = React.createRef();
    let Add_Post = () => {

        let text = New_Post_Element.current.value;
        let Action = {Type: 'ADD-POST', New_Text: text}
        Props.Dispatch(Action);
    }

    return (
        <div className={s.My_Posts_Wrapper}>
            <div className={s.My_Posts_Header}>
                <h1>Лента постов </h1>
                <textarea ref={New_Post_Element}></textarea>
                <button onClick={Add_Post }>Add post</button>
            </div>
            <div className={s.My_Posts}>
                {Posts_Elements}

            </div>

        </div>
    )
}
export default My_Posts;
