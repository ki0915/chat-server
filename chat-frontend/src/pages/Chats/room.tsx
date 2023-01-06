import * as React from "react";
import ChatList from "./components/ChatList";
import ChatDetail from "./components/ChatDetail";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";

type ChatType = {
  myId: string | null;
  chatId: string | null;
}

const Room = (props: ChatType): JSX.Element => {
  const { myId, chatId } = props;
  const [selectedChat, setSelectedChat] = useState<string | null>();

  const joinChat = (chatId: string) => {
    setSelectedChat(chatId);
  };

  useEffect(() => {
    setSelectedChat(chatId);
  }, [chatId]);

  return (
      <Container>
        {selectedChat != "List" && <ChatDetail chatId={selectedChat} myId={myId}/>}
        {selectedChat == "List" && <ChatList joinChat={joinChat} />}
    </Container>
    );
};

export default Room;