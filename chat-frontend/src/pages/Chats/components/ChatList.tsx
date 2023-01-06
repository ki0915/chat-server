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

type ChatType = {
  id: string;
  message: string;
  date: Date;
};

type ChatSelcetType = {
  joinChat: (chatId: string) => void;
};


const ChatList = (props: ChatSelcetType): JSX.Element => {
  const { joinChat } = props;

  return (
    <List>
          <ListItemButton onClick={() => joinChat("1")}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<ChatTitle id={"1번 방"} />} secondary={<ChatLastestStatus message={"1번방 입니다."}/>} />
          </ListItemButton>

          <ListItemButton onClick={() => joinChat("2")}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<ChatTitle id={"2번 방"} />} secondary={<ChatLastestStatus message={"2번방 입니다."}/>} />
          </ListItemButton>
    </List>

  )
};

export default ChatList;