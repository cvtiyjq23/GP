import s from './Message.module.css'


const Message = (Props) => {
    return (
            <div className={s.Messages_items}>
                {Props.Message_Valu}
            </div>
    )
}
export default Message;
