import { Menu } from "../../widgets/users/Menu";
import styles from "../../app/styles/chat_container/style.module.css";
import { useSelector } from "react-redux";
import { Suspense, lazy } from 'react';

const ChatWindowLazy=lazy(()=>import('../../widgets/chat_window/ChatWindow'));

interface RootState{
    startNewChat: {
      value: string;
    }
}

export const Chat=()=>{
    const isStartedChat=useSelector((state: RootState)=>state.startNewChat.value);

    return(
        <div className={styles.chatContainer}>
            <Menu />
            {
                isStartedChat!=="" && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ChatWindowLazy />
                    </Suspense>
                )
            }
        </div>
    );
}