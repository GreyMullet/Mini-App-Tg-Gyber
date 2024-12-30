import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";

interface RootState{
    startNewChat: {
      value: string;
    }
}

export const useTransformToModal=(chatContainer: React.RefObject<HTMLDivElement>)=>{
    const isChatStarted=useSelector((state: RootState)=>state.startNewChat.value);
    const isLessThanDesktop=useMediaQuery('(max-width:992px)');

    useEffect(()=>{
        if (isChatStarted!=='' && isLessThanDesktop){
            chatContainer.current?.classList.add('active-chat-small-devices');
        } else{
            chatContainer.current?.classList.remove('active-chat-small-devices');
        }
    }, [isChatStarted, isLessThanDesktop]);
}