import s from './Post.module.css'

const Post = (Props) =>{
    return (
                <div className={s.Item}>
                    <img src= {Props.Post_Img} />
                    <p>{Props.Post_Text}</p>
                </div>

    )
}
export default Post;
