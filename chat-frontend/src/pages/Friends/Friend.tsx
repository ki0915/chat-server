import {
    Avatar,
    Container,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Box,
    TextField,
    Button,
    Menu,
    MenuItem,
  } from "@mui/material";
  import ImageIcon from "@mui/icons-material/Image";
  import { ChangeEvent, useState, useEffect, MouseEvent } from "react";
  import axios from "axios";

  type UserType = {
    id: string;
    createdAt: string;
  };
  type myType = {
    myId: string | null[];
    changeTab: (chatId: string) => void;
  };

  type ChatType ={
    chatId: string;
  };
  
  const Friend = (props: myType): JSX.Element => {
    const { myId, changeTab } = props;
    const [FriendList, setFriendList] = useState<UserType[]>([]);
    const url = "http://52.255.186.26:8080/friends/" + myId;

    const getFriendList = async () => {
        const { data } = await axios.get<UserType[]>(
            url
          );
      
          setFriendList(data);
    };

  
    useEffect(() => {
      getFriendList();
    }, [FriendList]);
  


    const makeChat= async  (friend: string) => {
      const chatId = friend;
      changeTab(chatId);
    };

    const deleteFriend = async (id: string) => {
      try {
          await axios.post("http://52.255.186.26:8080/friends/delete", { userId: myId, friend: id});
      } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
          const { data } = e.response;
          if (data) {
            alert(data.message);
          }
        }
      }
    };
  
  
    return (
      <Container>
        <List>
          {FriendList.map((user) => {
            return (
              <section key={user.id}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.id}
                    secondary={user.createdAt}
                  />
                  <Button onClick={()=> makeChat(user.id)}>채팅하기</Button>
                  &nbsp;
                  <Button onClick={()=> deleteFriend(user.id)}>친구 삭제하기</Button>
                </ListItemButton>
              </section>
            );
          })}
        </List>
      </Container>
    );
  };
  
  export default Friend;
  