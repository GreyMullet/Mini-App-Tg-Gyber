import { useDispatch } from "react-redux"
import { startNewChat } from "../../app/storage/startChatSlice";

export const CloseStartedChat=()=>{
    const dispatch=useDispatch();

    function handleClose(): void{
        dispatch(startNewChat(''));
    }

    return <div onClick={handleClose} style={{ position: "absolute", right: '3%', cursor: 'pointer' }}>x</div>
}