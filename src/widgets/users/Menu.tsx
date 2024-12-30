import { Users } from "../../entities/users/Users";
import { FindUser } from "../../features/find_user/FindUser";
import styles from "../../app/styles/menu/style.module.css";

export const Menu=()=>{
    return(
        <div className={styles.menu}>
            <FindUser />
            <Users />
        </div>
    );
}