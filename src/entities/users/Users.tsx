import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useStartChat } from "../../features/start_chat/useStartChat";
import styles from '../../app/styles/users/style.module.css';

interface User{
    ava: string;
    nick: string;
}

interface RootState{
    searchNick: {
      value: string;
    }
}

export const Users=()=>{
    const users: User[]=[
        {
            ava: '...',
            nick: 'Albert'
        },
        {
            ava: '...',
            nick: 'Karo'
        },
        {
            ava: '...',
            nick: 'Mike'
        }
    ];
    const searchingNick=useSelector((state: RootState)=>state.searchNick.value);

    const startChat=useStartChat();

    return(
        <div className={styles.users}>
            {
                users.filter(user=>user.nick.toLowerCase().includes(searchingNick)).map(user=>{
                    return <div key={user.nick} className={styles.user} onClick={()=>startChat(user.nick)}>
                        <FaUserCircle className={styles.noAva} />
                        <span>
                            {user.nick}
                        </span>
                    </div>
                })
            }
        </div>
    );
}