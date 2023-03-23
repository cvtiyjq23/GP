import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (Props) => {
    return (
        <div className={s.Dialog_item}>
                <NavLink to={"/dialogs/"+ Props.Dialog_Id}>{Props.Dialog_Valu}</NavLink>
        </div>
    )
}
export default Dialog;
