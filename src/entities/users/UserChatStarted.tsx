import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import styles from "../../app/styles/chosen_user/style.module.css";
import { CloseStartedChat } from "../../features/close_started_chat/CloseStartedChat";

interface RootState{
    startNewChat: {
      value: string;
    }
}

export const UserChatStarted=()=>{
    const searchingNick=useSelector((state: RootState)=>state.startNewChat.value);

    return(
      <div className={styles.chosenUserContainer}>
        <CloseStartedChat />
        <FaUserCircle className={styles.noAva} />
        <span>
          {searchingNick}
        </span>
      </div>
    );
}