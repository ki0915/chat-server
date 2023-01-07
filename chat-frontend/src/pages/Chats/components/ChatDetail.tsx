import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import axios from "axios";
import { websocketContext } from "../../../config/WebSocketProvider";


type ChatMessageType = {
  id: string;
  time: Date;
  message: string;
  isMe: boolean;
};

type ChatDetailType = {
  myId: string;
  chatId: string;
};

type ReceiveMessageType = {
  chatId: string;
  senderId: string;
  id: string;
  message: string;
  isRead: boolean;
  time: Date;
};

const ChatDetail = (props: ChatDetailType): JSX.Element => {
  const { chatId, myId } = props;
  const [chatMessages, setChatMessage] = useState<ChatMessageType[]>([]);
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState<ChatMessageType>();
  const ws = useContext(websocketContext);
  const changeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    setMessage(inputText);
  };

  const sendMessage = () => {
    console.log(ws.current);
    ws.current.emit("sendMessage", {
      roomId: chatId,
      senderId: myId,
      message,
    });
  };

  const loadMessage = async () => {

    const { data } = await axios.get<ChatMessageType[]>(
      `http://52.255.186.26:8080/chats/${chatId}/messages`,
      {
        params: {
          senderId: myId,
        },
      }
    );
    setChatMessage(data);
  };

  const receiveMessage = (recieved: ReceiveMessageType) => {
    const { id, time, message, senderId } = recieved;
    const isMe = senderId === "1";
    const chatMessage: ChatMessageType = {
      id,
      isMe,
      message,
      time,
    };

    setNewMessage(chatMessage);
  };

  useEffect(() => {
    loadMessage();
    ws.current.emit("joinRoom", { chatId });
    ws.current.on("receiveMessage", (data: ReceiveMessageType) => {
      receiveMessage(data);
    });
  }, [changeMessage]);

  useEffect(() => {
    if (newMessage) {
      setChatMessage([...chatMessages, newMessage]);
    }
  }, [newMessage]);

  return (
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "calc(100vh - 80px)",
      }}
    >
     방 번호: {chatId}
     <br/>
     참여한 사람들: 
    {chatMessages.map((People, key) => {
        return (
          <span key={key}>{People.id}</span>
        )
    })}
    

      <Stack
        spacing={1}
        sx={{
          overflowY: "scroll", 
          overflowX: "hidden", 
          height: "calc(100vh - 160px)",
        }}
      >
        {chatMessages.map((Message) => {
          return (
            <>
              {Message.isMe ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end", // 이거 쓰면 오른 쪽 끝에 붙음
                    pl: "5px",
                    pr: "5px",
                  }}
                >
                  <Box>
                    <Typography variant="caption">
                      {Message.id.toLocaleString()}
                    </Typography>
                    <Paper
                      elevation={1}
                      sx={{
                        display: "inline-block",
                        padding: "10px",
                        maxWidth: "60%", 
                        backgroundColor: "#fff712",
                        borderRadius: "20px",
                      }}
                    >
                      <Typography variant="body2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: Message.message,
                          }}
                        ></span>
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    pl: "5px",
                    pr: "5px",
                  }}
                >
                  <Box>
                    <Paper
                      elevation={1}
                      sx={{
                        display: "inline-block",
                        padding: "10px",
                        maxWidth: "60%",
                        backgroundColor: "#e8e8e8",
                        borderRadius: "20px",
                      }}
                    >
                      <Typography variant="body2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: Message.message,
                          }}
                        ></span>
                      </Typography>
                    </Paper>
                    <Typography variant="caption">
                      {Message.id.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
              )}
            </>
          );
        })}
      </Stack>

      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          bottom: "0px",
          left: 0,
          right: 0,
        }}
      >
        <Box sx={{ width: "85%" }}>
          <TextField fullWidth onChange={changeMessage}/>
        </Box>
        <Box sx={{ width: "15%", p: 1 }}>
          <Button variant="contained" type="submit" color="primary" fullWidth onClick={sendMessage} >
            전송
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatDetail;