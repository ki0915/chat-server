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

/*
type ChatMessageType = {
  id: number;
  time: Date;
  message: string;
  isMe: boolean;
};

type ChatDetailType = {
  chatId: number;
};

type ReceiveMessageType = {
  chatId: number;
  senderId: number;
  id: number;
  message: string;
  isRead: boolean;
  time: Date;
};

const ChatDetail = (props: ChatDetailType): JSX.Element => {
  const { chatId } = props;
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
      chatId,
      senderId: 1,
      message,
    });
  };

  const loadMessage = async () => {
    const { data } = await axios.get<ChatMessageType[]>(
      `http://localhost:5000/chats/${chatId}/messages`,
      {
        params: {
          userId: 1,
        },
      }
    );
    setChatMessage(data);
  };

  const receiveMessage = (recieved: ReceiveMessageType) => {
    const { id, time, message, senderId } = recieved;
    const isMe = senderId === 1;
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
  }, []);

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
      <Stack
        spacing={1}
        sx={{
          overflowY: "scroll", // y 축이 넘어가면 어떻게 할거냐? 스크롤
          overflowX: "hidden", // x 축이 넘어가면 어떻게 할거냐? 숨겨라
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
                      {Message.time.toLocaleString()}
                    </Typography>
                    <Paper
                      elevation={1}
                      sx={{
                        display: "inline-block",
                        padding: "10px",
                        maxWidth: "60%", // 최대 크기
                        backgroundColor: "#fff712",
                        borderRadius: "20px",
                      }}
                    >
                      <Typography variant="body2">
                        <span
                          dangerouslySetInnerHTML={{
                            // 위험한 html이 있어도 그대로 출력해라
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
                      {Message.time.toLocaleString()}
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
          bottom: "80px",
          left: 0,
          right: 0,
        }}
      >
        <Box sx={{ width: "85%" }}>
          <TextField fullWidth />
        </Box>
        <Box sx={{ width: "15%", p: 1 }}>
          <Button variant="contained" color="primary" fullWidth>
            전송
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatDetail;
*/
