
import * as React from "react";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";

type ChatType = {
  chatId: number | null;
}

const Chats = (props: ChatType): JSX.Element => {
  const { chatId } = props;
  const [selectedChat,setSelectedChat] = useState<number | null>(null);

  const joinChat = (chatId: number) => {
    setSelectedChat(chatId);
  };

  useEffect(() => {
    setSelectedChat(chatId);
  }, [chatId]);

  return ( <></>);
};

export default Chats;
