import { useDispatch } from "react-redux";
import { startNewChat } from "../../app/storage/startChatSlice";

export const useStartChat=()=>{
  const dispatch=useDispatch();
  const startChat=(nick: string)=>{
    dispatch(startNewChat(nick));
  }
  
  return startChat;
};
