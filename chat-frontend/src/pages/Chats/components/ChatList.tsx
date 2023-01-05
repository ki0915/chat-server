import {
  Container,
  Grid,
  IconButton,
  List,
  TextField,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListItem,
  Avatar,
} from "@mui/material";
import { ChangeEvent, useState, useEffect, MouseEvent } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Modal from "@mui/material/Modal";
import * as React from "react";
import axios from "axios";
import ImageIcon from "@mui/icons-material/Image";
import ChatTitle from "./chatTitle";
import ChatLastestStatus from "./ChatLastestStatus";
/*
type ChatType = {
  id: number;
  name: string;
  message: string;
  date: Date;
  count?: number;
};

type ChatSelcetType ={
  joinChat: (chatId: number) => void;
};


const ChatList = (props: ChatSelcetType):  JSX.Element => {
  const { joinChat} = props;
  const [chatList, setChatList] = useState(chats);

  const loadChatList = async () => {
    const { data } = await  axios.get<ChatType[]>(
      "http://localhost:5000/chats",
      {
        params: {
          userId: 1,
        },
      }
    );
    setChatList(data);
  };

  useEffect(() => {
    loadChatList();
  }, []);

  return (
    <List>
    {chatList.map((chat) => {
      return (
          <ListItemButton key={chat.id} onClick={() => joinChat(chat.id)}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<ChatTitle name={chat.name} date={chat.date}/>} secondary={<ChatLastestStatus message={chat.message} count={chat.count}/>} />
          </ListItemButton>
      );
    })};
  </List>
  )
  }*/
