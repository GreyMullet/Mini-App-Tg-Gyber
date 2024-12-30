import { UserChatStarted } from "../../entities/users/UserChatStarted";
import styles from "../../app/styles/chat_window/style.module.css";
import '../../app/styles/chat_window/chat_smaller_devices.css';
import { SendMessage } from "../../features/send_message/SendMessage";
import { useRef } from "react";
import { useTransformToModal } from "../../features/transform_to_modal/useTransformToModal";

export default function ChatWindow(){
    const chatContainerRef=useRef<HTMLDivElement>(null);
    
    useTransformToModal(chatContainerRef);

    return(
        <div className={styles.chatWindow} ref={chatContainerRef}>
            <UserChatStarted />
            <div className={styles.chat}>
                <SendMessage />
            </div>
        </div>
    );
}