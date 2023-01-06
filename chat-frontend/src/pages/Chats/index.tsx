import * as React from "react";
import { Container } from "@mui/material";
import ChatDetailUser from "./components/ChatDetailFriend";

type ChatType = {
  myId: string | null;
  chatId: string | null;
}

const Chats = (props: ChatType): JSX.Element => {
  const { myId, chatId } = props;

  return (
      <Container>
        <ChatDetailUser chatId={chatId} myId={myId}/>
    </Container>
    );
};

export default Chats;