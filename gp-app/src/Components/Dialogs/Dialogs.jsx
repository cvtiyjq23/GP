import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (Props) => {

console.log(Props);
    let Dialog_Elements = Props.Dialogs_Page.Dialogs.map(d=> <Dialog Dialog_Valu = {d.dialog} Dialog_Id = {d.id} />);
    let Message_Elements = Props.Dialogs_Page.Messages.map(d=> <Message Message_Valu = {d.Message} Message_Id = {d.id} />);
    return (
        <div className={s.Dialogs_Wrapper}>
            <div>{Dialog_Elements}</div>
            <div>{Message_Elements}</div>
        </div>
    )
}
export default Dialogs;
