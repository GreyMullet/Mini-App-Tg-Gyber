import { BsFillSendFill } from "react-icons/bs";
import styles from "../../app/styles/send_message/style.module.css";

export const SendMessage=()=>{
    return(
        <div className={styles.message}>
            <input type="text" placeholder="Write a Message" />
            <BsFillSendFill className={styles.send} />
        </div>
    );
}